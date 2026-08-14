# Storage <small>Documentation</small>

Shared storage on FarmShare is provided by an all-flash ZFS file system, mounted on each node via NFSv4 (and using RDMA where possible). Performance is very good, but not comparable to a fast, parallel file system.

!!! warning "File System Best Practices"
    User activity can affect the stability of the cluster! Use care when storing, accessing, and operating on files. Choose a storage location appropriate to the intended purpose of the data. Avoid applications that monitor or scan for files, or else configure them to respect file system boundaries and exclude (at least) system files, files owned by other users (`/home`, `/scratch`), and files stored in <span class="acronym">[AFS](#afs)</span> (`/afs`, `~/afs-home`).

## Home Directories

Home directories (`~`, `$HOME`, `/home/users/$USER`) are intended for long-term storage of user data. Each user has a moderate quota for home storage (currently 50 GB), and files stored in user home directories are backed up for a short time and may be recoverable if lost. Use home directories for important *permanent* data like code, configuration files, scripts, small working data sets, and job results.

## Scratch

Each user also has a private, scratch directory (`/scratch/users/$USER`). Scratch storage is intended for short-term storage of data and is purged regularly (currently of files not modified within the last 90 days). Use scratch for *working* data that will not fit within a home directory. Clean up old files when they are no longer needed, and promptly remove important data to permanent storage. Do not attempt to circumvent limits on the lifetime of data stored there.

## Class and Group Directories

Home (`/home/{classes,groups}`) and scratch (`/scratch/{classes,groups}`) storage is available for classes and groups upon request; send inquiries to [srcc-support@stanford.edu](mailto:srcc-support@stanford.edu).

## <span class="acronym">AFS</span>

<span class="acronym">[AFS](https://uit.stanford.edu/service/afs/)</span> is a legacy file system once used widely at the University. Access to <span class="acronym">AFS</span> is provided *only* on the login nodes, and *only* as a convenience, for access to course materials still stored there, and to user data stored in <span class="acronym">AFS</span> home directories. Users should not compute directly on data in <span class="acronym">AFS</span>; instead, copy them to a FarmShare file system first. For simple tasks, like editing files for a web site hosted in <span class="acronym">AFS</span>, use `cardinal.stanford.edu` rather than the FarmShare login nodes.

## Local Storage

Temporary local storage (`/tmp`) is also available on each node and located on fast flash drives. This storage is purged frequently and, on compute nodes, is scoped to the running job and cleaned up when it ends. Use `/tmp` for fast access to *transient* data.
