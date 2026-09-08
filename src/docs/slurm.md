# Running Jobs

FarmShare uses the [Slurm](https://slurm.schedmd.com/) workload manager to schedule *batch jobs* and allocate resources. Jobs are scheduled according to their *priority*, which depends on a number of factors, including how long a job has been waiting to run, its size, and a fair-share value that tracks recent per-user utilization of cluster resources.

!!! warning "Idle Nodes"
    Lower-priority jobs, and jobs requiring access to resources not currently available, may wait some time before starting to run. The scheduler may reserve resources so that such pending jobs can start; while it will try to backfill these resources with smaller, shorter jobs (even those with a lower priority), this behavior can sometimes cause nodes to appear to be idle even when there are jobs that are ready to run.

## Using Slurm

Users interact with the scheduler using terminal commands.

| Command  | Description | Behavior |
| -------- | ----------- | -------- |
| [`salloc`](https://slurm.schedmd.com/salloc.html) | Request resources and allocate them to a new job | Starts a new shell with the allocated resources, but does not execute anything |
| [`srun`](https://slurm.schedmd.com/srun.html) | Request resources and run a command on the allocated compute node | Executes the command on a compute node |
| [`sbatch`](https://slurm.schedmd.com/sbatch.html) | Request resources and schedule a script to run on the allocated compute node | Submits a batch job described by the script |
| [`squeue`](https://slurm.schedmd.com/squeue.html) | View job and job step information | Displays job information |
| [`scancel`](https://slurm.schedmd.com/scancel.html) | Signal or cancel jobs, job arrays, or job steps | Cancels a running job |
| [`sinfo`](https://slurm.schedmd.com/sinfo.html) | View information about Slurm nodes and partitions | Displays partition information |
| [`scontrol`](https://slurm.schedmd.com/scontrol.html) | View detailed information on jobs, nodes, partitions, reservations, and configuration | Displays detailed cluster information |

!!! info "Slurm Documentation"
    Full [documentation](https://slurm.schedmd.com/documentation.html) on Slurm is provided by the developer, and detailed usage information for Slurm commands can be found in the `man` pages.

### Paritions and Qualities of Service

Compute nodes are grouped into *partitions* according to the kinds of resources they provide and the class of jobs they are intended for. Jobs running on the cluster are subject to limits according to which parition they are running on.

* **`normal`**, the default partition, and suitable for most batch jobs.
* **`bigmem`**, for jobs with very large memory requirements.
* **`gpu`**, for jobs requiring one (or more) GPUs.

There is also an `interactive` partition for interactive jobs and OnDemand applications, and a `caddyshack` parition intended exclusively for EE users and workloads. These partitions are hidden by default to streamline the display of job information when running commands like `sinfo` and `squeue`.

Partitions (and jobs) may also be associated with various *qualities of service* that apply additional limits (or override certain parition limits).

* **`long`**, for jobs that need to exceed the usual maximum runtime limit.
* **`interactive`**, for interactive applications requiring real-time user input.
* **`dev`**, for prototyping, development, and testing.

Jobs using these qualities of service may run *only* on the `normal` partition; there are also **`bigmem`** and **`gpu`** qualities of service corresponding to those partitions. 

Nodes may be shared among multiple partitions and capable of running jobs with more than one quality of service, and the choice of partition(s) and quality of service may affect job priority; users should fully describe these when submitting a job. For example: GPU nodes may run `normal` jobs, but no such job will be scheduled on a GPU node while `gpu` jobs are available to run; and, while it is not possible to run a `long` job on the `gpu` partition it *is* possible for a job to allocate a GPU on the `normal` parition using the `long` quality of service.

### Interactive Jobs

Interactive sessions that require resources in excess of limits on the login nodes, exclusive access to resources, or access to a feature not available on the login nodes (for example, a GPU), *must* be submitted to the scheduler and run on a compute node. The number of simultaneous interactive jobs a user may start is limited, and interactive jobs may run for *at most* one day.

``` shell
$ salloc --partition=interactive --qos=interactive
...
salloc: Nodes wheat-01 are ready for job
sunetid@wheat-01:~$ 
```

### Batch Jobs

The [`sbatch`](https://slurm.schedmd.com/sbatch.html) command is used to submit batch jobs. Batch jobs must be able to run unattended, without real-time user input. Each is described by a shell script which (optionally) specifies scheduler options, sets up the environment, and executes an instance of an application (for example, a Python script). 

Common options are outlined below. Some options have both a short and a long version; refer to the `man` page for details.

* `-p`, `--partition` specifies which partition(s) the job should run on. The default is `normal`.
* `-q`, `--qos` specifies which quality of service to use. The default is `normal`.
* `-c`, `--cpus-per-task` specifies the number of *CPUs* (cores, or threads) that should be allocated (if a job requests multiple tasks, this option specifies the number of CPUs *per task*; the default number of tasks is one). The default is one, but on some nodes two CPUs may be allocated by default (due to hyperthreading).
* `--mem` (or `--mem-per-cpu`) specifies how much total *memory* (or memory per CPU) should be allocated. The default varies by partition.
* `-G`, `--gpus` specifies the number of *GPUs* that should be allocated. GPUs are not allocated by default.
* `-t`, `--time` specifies how long a job will run. The default run time on the `normal` partition is two hours. Make sure to request enough time for a job to finish: a job that does not terminate on its own by the end of its time limit is killed.

!!! important "Resource Limits"
    Consider carefully what resources are required when submitting a job! Jobs that request more resources than they need may wait longer to start, and jobs that exceed allocated limits will be killed.

### A Simple Example

Consider a simple Python script, `sum.py`, that calculates the sum of the numbers 1 through 5.

``` python
a = (1, 2, 3, 4, 5)
x = sum(a)
print(x)
```

To submit this script as a batch job to the scheduler it must be wrapped in a *batch script* (here named `example.sh`). Any options that might otherwise be passed to the `sbatch` command can be embedded in this script as comments beginning with `#SBATCH`.

``` shell
#!/bin/bash

#SBATCH --job-name=example
#SBATCH --partition=normal
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1

module load python
python3 sum.py
```

In this example, Python is loaded from an environment module and `sum.py` is executed uing the `python3` command, but a more complex job might include additional set up of the execution environment and a more involved series of executable steps.

The batch script must be executable.

``` shell
$ chmod a+x example.sh
```

Finally, the job is submitted by passing the batch script as an argument to the `sbatch` command.

``` shell
$ sbatch example.sh
Submitted batch job 300992
```

Output from the execution of the script is saved in a text file in the current working directory.

``` shell
$ cat slurm-300992.out
15
```
