# Running Jobs

## Slurm

FarmShare uses [Slurm](https://slurm.schedmd.com/) for job (resource) management. Full [documentation](https://slurm.schedmd.com/documentation.html) and detailed usage information is provided in the man pages for the srun, sbatch, squeue, scancel, sinfo, and scontrol commands.

Jobs are scheduled according to a priority which depends on a number of factors, including how long a job has been waiting, its size, and a fair-share value that tracks recent per-user utilization of cluster resources. Lower-priority jobs, and jobs requiring access to resources not currently available, may wait some time before starting to run. The scheduler may reserve resources so that pending jobs can start; while it will try to backfill these resources with smaller, shorter jobs (even those at lower priorities), this behavior can sometimes cause nodes to appear to be idle even when there are jobs that are ready to run. You can use squeue --start to get an estimate of when pending jobs will start.

## Partition info

| Partition   | Max mem | Max CPUs | Time limit |
|-------------|---------|----------|------------|
| normal      | -       | 256      | 2 Days     |
| bigmem      | 768GB   | 344      | 2 Days     |
| gpu         | ??      | ??       | 2 Days     |
| caddyshack  | 32GB    | 8        | 2 Days     |
| interactive | ?       | 16       | 24 Hours   |
