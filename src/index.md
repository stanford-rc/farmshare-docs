# FarmShare <small>Documentation</small>

## Welcome to FarmShare!

FarmShare is Stanford University's community computing environment. It is intended for use in teaching, coursework, and unsponsored research, and is designed to be similar to other high-performance computing environments at Stanford (and elsewhere), making it easier for users to learn how such systems work and transition to other clusters when appropriate. FarmShare is *not* approved for use with high-risk data, or for use in sponsored research.

FarmShare evolved from a public UNIX cluster, once located on the second floor of Sweet Hall, which was itself a successor to the University's original timesharing service, <span class="acronym">LOTS</span> (Low-Overhead Timesharing). The latest iteration, with major hardware and software updates, came online in December 2025.

!!! important "FarmShare Usage Policy"
    See the [Policy](docs/policy.md) section for details.

## Cluster Description

FarmShare consists of several classes of servers:

* **Login** nodes (`rice`), where users log in for interactive work (running commands, accessing files, submitting jobs, and reviewing results). Unlike some other HPC clusters, users are allowed to do substantial work on the login nodes, but some limits are enforced; work that needs to exceed these limits should be submitted as a batch job.
* **Compute** nodes (`barley`, `rye`, `oat`, `wheat`, and `iron`), orchestrated by the [Slurm](https://slurm.schedmd.com) workload manager, where batch jobs run. These have more computing resources than the login nodes, and some (`rye`) have additional memory or (`oat`) specialized hardware (GPUs) for jobs that require them. Others (`iron`) are dedicated to specific workloads. Users do not access these nodes directly, but by submitting [jobs](docs/slurm.md).
* **Data transfer** nodes (`dtn`), which are used for [moving data](docs/transfer.md) between FarmShare and other systems.

There are also various **service** nodes, used for the administration of the cluster.

The nodes are connected by a fast network, and have access to [shared storage](docs/storage.md).

!!! info "Operating System"
    FarmShare systems run Ubuntu 24.04 LTS (`noble`), based on Debian 13 (`trixie`), and use the HWE kernel.

Users can get started by [connecting](docs/connecting.md) directly to a login node, or via a web browser using [FarmShare OnDemand](https://ondemand.farmshare.stanford.edu/).

## Eligibility

FarmShare is available to users with a full-service [SUNet ID](https://uit.stanford.edu/service/accounts/sunetids). A full-service ID is one that has email service; anyone with a `stanford.edu` e-mail address can log in and use FarmShare for an approved purpose. Users who are not already eligible for a full-service SUNetID (e.g., visiting researchers) can seek sponsorship at the required level.

!!! info "Sponsorship"
    Sponsoring a SUNet ID requires spending authority, and involves a [monthly fee](https://uit.stanford.edu/rates/sponsorship) payable to University IT. Speak with a faculty member or manager for more information.

## Sponsored Research

FarmShare is not intended for sponsored or departmental research. Users with a grant or other, dedicated source of funding should explore other options:

* **[Sherlock](https://www.sherlock.stanford.edu/)**, a large, shared cluster for Stanford faculty and their labs or research teams.
* **[Carina](https://carinadocs.sites.stanford.edu/)**, a secure computing environment approved for use with high-risk data.
* **[Nero](https://nero-docs.stanford.edu/)**, a cloud computing environment and Big Data platform for high-risk data.
* **[Marlowe](https://docs.marlowe.stanford.edu/)**, a large GPU cluster for AI and other research requiring access to specialized hardware.
