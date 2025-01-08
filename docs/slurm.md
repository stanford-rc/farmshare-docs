# Running Jobs

## Slurm

FarmShare uses [Slurm](https://slurm.schedmd.com/) for job (resource) management. Full [documentation](https://slurm.schedmd.com/documentation.html) and detailed usage information is provided in the man pages for the srun, sbatch, squeue, scancel, sinfo, and scontrol commands.

Jobs are scheduled according to a priority which depends on a number of factors, including how long a job has been waiting, its size, and a fair-share value that tracks recent per-user utilization of cluster resources. Lower-priority jobs, and jobs requiring access to resources not currently available, may wait some time before starting to run. The scheduler may reserve resources so that pending jobs can start; while it will try to backfill these resources with smaller, shorter jobs (even those at lower priorities), this behavior can sometimes cause nodes to appear to be idle even when there are jobs that are ready to run. You can use `squeue --start` to get an estimate of when pending jobs will start.

## Slurm commands

Slurm allows requesting resources and submitting jobs in a variety of ways. The
main Slurm commands to submit jobs are listed in the table below:

| Command  | Description | Behavior |
| -------- | ----------- | -------- |
| `salloc` | Request resources and allocates them to a job | Starts a new shell, but does not execute anything |
| `srun`   | Request resources and runs a command on the allocated compute node(s) | Blocking command: will not return until the job ends |
| `sbatch` | Request resources and runs a script on the allocated compute node(s) | Asynchronous command: will return as soon as the job is submitted |

## Interactive Jobs

Interactive sessions that require resources in excess of limits on the login nodes, exclusive access to resources, or access to a feature not available on the login nodes (e.g., a GPU), can be submitted to a compute node. Each user is allowed one interactive job, which may run for at most one day. You can use the [`srun`](https://slurm.schedmd.com/srun.html) command to request one:

~~~
ta5@rice-04:~$ srun --qos=interactive --pty bash
ta5@wheat-01:~$ 
~~~

## Batch Jobs

The [`sbatch`](https://slurm.schedmd.com/sbatch.html) command is used to submit a batch job. A job is simply an instance of your program, for example your R, Python or Matlab script that is submitted to and executed by the scheduler (Slurm). When you submit a job with the sbatch command it's called a batch job and it will either run immediately or will pend (wait) in the queue. Options are used to request specific resources (including runtime), and can be provided either on the command line or, using a special syntax, in the script file itself. sbatch can also be used to submit many similar jobs, each perhaps varying in only one or two parameters, in a single invocation using the --array option; each job in an array has access to environment variables identifying its rank.

**CPUs:** How many CPUs the program you are calling the in the sbatch script needs, unless it can utilize multiple CPUs at once you should request a single CPU. Check your code's documentation or try running in an interactive session with and run `htop` if you are unsure.

**memory (RAM):** How much memory your job will consume. Some things to consider, will it load a large file or matrix into memory? Does it consume a lot of memory on your laptop? Often the default memory is sufficient for many jobs.

**time:** How long will it take for your code to run to completion?

**partition:** What set of compute nodes on FarmShare will you run on, normal, interactive, bigmem? Use the [`sh_part`][url_sh_part] command to see what partitions you are allowed to run on. The default partition on Sherlock is the normal partition.

Sample batch script to submit a job:

~~~
ta5@rice-04:~$ cat hello_world.sh 
#!/bin/bash

#SBATCH --job-name=hello_world
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --partition=normal

echo 'Hello World!'
ta5@rice-04:~$ 
ta5@rice-04:~$ 
ta5@rice-04:~$ sbatch hello_world.sh 
Submitted batch job 177987
ta5@rice-04:~$ 
ta5@rice-04:~$ cat slurm-177987.out 
Hello World!
ta5@rice-04:~$ 
~~~

## Partition Info

| Partition   | Max Mem     | Max CPU       |
| :---        |    :----:   |          ---: |
| normal      | 188GB       | 256           |
| bigmem      | 768GB       | 344           |
| interactive | 188GB       | 16            |

