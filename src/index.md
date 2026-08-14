# FarmShare <small>Documentation</small>

## Welcome to FarmShare!

FarmShare is Stanford University's community computing environment. It is intended for use in teaching, coursework, and unsponsored research, and is designed to be similar to other high-performance computing environments at Stanford (and elsewhere), making it easier for users to learn how such systems work and transition to other clusters when appropriate. FarmShare is *not* approved for use with high-risk data, or for use in sponsored research.

FarmShare evolved from a public UNIX cluster, once located on the second floor of Sweet Hall, which was itself a successor to the University's original timesharing service, <span class="acronym">LOTS</span> (Low-Overhead Timesharing). The latest iteration, with major hardware and software updates, came online in December 2025.

## Cluster Description

FarmShare consists of several classes of servers:

* **Login** nodes (`rice`), where users log in for interactive work (running commands, accessing files, submitting jobs, and reviewing results). Unlike some other HPC clusters, users are allowed to do substantial work on the login nodes, but some limits are enforced; work that needs to exceed these limits should be submitted as a batch job.
* **Compute** nodes (`barley`, `rye`, `oat`, `wheat`, and `iron`), orchestrated by the [Slurm](https://slurm.schedmd.com) workload manager, where batch jobs run. These have more computing resources than the login nodes, and some (`rye`) have additional memory or (`oat`) specialized hardware (GPUs) for jobs that require them. Others (`iron`) are dedicated to specific workloads. Users do not access these nodes directly, but by submitting [jobs](docs/slurm.md) (or, for interactive or desktop applications, via [FarmShare OnDemand](https://ondemand.farmshare.stanford.edu)).
* **Data transfer** nodes (`dtn`), which are used for [moving data](docs/transfer.md) between FarmShare and other systems.

There are also various **service** nodes, used for the administration of the cluster.

The nodes are connected by a fast network, and have access to [shared storage](docs/storage.md).

## Eligibility

!!! important "FarmShare Usage Policy"
    Visit our [Policy](docs/policy.md) section for details

FarmShare is available to anyone who has a full-service SUNetID. A full-service SUNetID is one that has email service; if you can successfully get to [Stanford Webmail](https://webmail.stanford.edu/), then you are eligible to use FarmShare for academic work. If you do not already have a full-service SUNetID (maybe because you are a visiting researcher), you can get a sponsored full-service SUNetID. Read more about [SUNetID levels](https://uit.stanford.edu/service/accounts/sunetids).

Note that, in order to get a sponsored SUNetID, a monthly fee will be charged by University IT. Only people with spending authority may sponsor a SUNetID. Sponsorships can be obtained and paid for through [Sponsorship Manager](https://uit.stanford.edu/service/sponsorship/).  Current rates are available from the Sponsored Account [Rates page](https://uit.stanford.edu/rates/sponsorship).

FarmShare is meant for [**low- or moderate-risk data**](https://uit.stanford.edu/guide/riskclassifications), and is primarily intended for coursework or research purposes. It is not meant for sponsored research (where you have a dedicated source of funding), and is *not* approved for handling high-risk data.

## Sponsored Research

If you are doing sponsored or departmental research, then FarmShare might not be the right place for you. Instead, if the data you are working with is all low-risk, then you should consider our [Sherlock](https://www.sherlock.stanford.edu/) Cluster. 

If you are working with high-risk data then you should consider our [Nero GCP](https://nero-docs.stanford.edu/gcp-overview.html) or [Carina](https://carinadocs.sites.stanford.edu/) Computing platform. 

If you are working with complex AI you should consider our [Marlowe](https://docs.marlowe.stanford.edu/) Cluster.
