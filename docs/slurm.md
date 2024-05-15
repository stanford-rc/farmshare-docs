# Running Jobs

## Slurm

FarmShare uses [Slurm](https://slurm.schedmd.com/) for job (resource) management. Full [documentation](https://slurm.schedmd.com/documentation.html) and detailed usage information is provided in the man pages for the srun, sbatch, squeue, scancel, sinfo, and scontrol commands.

Jobs are scheduled according to a priority which depends on a number of factors, including how long a job has been waiting, its size, and a fair-share value that tracks recent per-user utilization of cluster resources. Lower-priority jobs, and jobs requiring access to resources not currently available, may wait some time before starting to run. The scheduler may reserve resources so that pending jobs can start; while it will try to backfill these resources with smaller, shorter jobs (even those at lower priorities), this behavior can sometimes cause nodes to appear to be idle even when there are jobs that are ready to run. You can use squeue --start to get an estimate of when pending jobs will start.

## Partitions and Qualities-of-Service

There are separate Slurm partitions for the standard compute nodes (normal), the large-memory nodes (bigmem), and the GPU nodes (gpu); there are corresponding Slurm qualities-of-service, as well as qualities-of-service for long-running (long) and interactive (interactive) jobs. Normal jobs have a maximum runtime of 2 days and long jobs a maximum of 7. Each user is currently allowed one interactive session with a maximum runtime of 1 day.

Be sure to request explicitly the resources you need when submitting a job.
