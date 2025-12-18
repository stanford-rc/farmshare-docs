# Welcome to FarmShare

FarmShare is Stanford's community computing environment. It is intended for use in coursework and unsponsored research. It is not approved for use with high-risk data, or for use in sponsored research.

FarmShare evolved from the old, public UNIX cluster, once located on the second floor of Sweet Hall, which was itself a successor to systems like the University's original timeshare service, LOTS. The latest iteration of FarmShare with hardware and major OS update came online early 2024.

Resources on FarmShare are focused on making it easier to learn how to use research computing including “scheduler” or “distributed resource management system” to submit compute jobs. By using FarmShare, new researchers can more easily adapt to using larger clusters when they have big projects that involve using federally funded resources, shared Stanford clusters, or on a small grant funded cluster. Full SUNet (or sponsorship) required.

## What's New (2025)

Key changes on the new FarmShare environment include:

* Major Hardware Expansion (Dec 2025)
    * 12 New Compute nodes (6 GPU nodes each with four [NVIDIA L40S](https://www.nvidia.com/en-us/data-center/l40s), 2 Big Memory nodes with up to 1.5T Memory, 4 Regular compute nodes with AMD "Genoa-X" CPUs)
    * [TrueNAS](https://www.truenas.com/blog/the-new-performance-flagship-truenas-f-series) all-NVMe Storage Appliance now providing `HOME` and `/scratch`
    * New 100GbE Network providing 25GbE to Compute nodes (leveraging RDMA where possible)
* Minor OS updates to [Ubuntu 24.04 LTS](https://discourse.ubuntu.com/t/noble-numbat-point-release-changes/47565/4) which brings many changes, improvements and provides LTS stability
* Slurm scheduler updated to [v25.11.1](https://www.schedmd.com/slurm-version-25-11-1-is-now-available) 
* New software modules recompiled to match the OS and hardware changes

## Cluster Components

!!! info "Ubuntu OS"
    All FarmShare servers run [Ubuntu 24.04 LTS](https://wiki.ubuntu.com/NobleNumbat/ReleaseNotes) and get patched/updated on a regular basis

FarmShare consists of three classes of servers:

* *Login* nodes called **rice** servers where you log in to run commands, access files, submit jobs, and review results. The rice servers also have access to [Stanford AFS](https://uit.stanford.edu/service/afs). These servers can be accessed via [`ssh`](connecting.md#ssh) and can be used for interactive work. Some resource limits are enforced, so if you need to run a long-running or compute- and/or memory-intensive process you should submit a [*job*](slurm.md#slurm)

* *Compute* nodes called **barley**, **rye** and **wheat** servers. They have more CPU power and more memory than the rice servers, and are meant for both [interactive](slurm.md#interactive-jobs) jobs (where you log in to control what happens) and [batch](slurm.md#batch-jobs) jobs (where everything runs from a script that you submit)

* *GPU compute nodes* called **oat** servers. They are similar to the compute nodes mentioned above, except that they also have GPUs installed 

FarmShare currently has 4 rice servers (login nodes) along with 26 compute nodes (iron, rye, wheat, oat nodes). User storage for `$HOME` along with global `/scratch` space is available on all nodes.

## Eligibility

!!! important "FarmShare Usage Policy"
    Visit our [Policy](policy.md) section for details

FarmShare is available to anyone who has a full-service SUNetID. A full-service SUNetID is one that has email service; if you can successfully get to [Stanford Webmail](https://webmail.stanford.edu/), then you are eligible to use FarmShare for academic work. If you do not already have a full-service SUNetID (maybe because you are a visiting researcher), you can get a sponsored full-service SUNetID. Read more about [SUNetID levels](https://uit.stanford.edu/service/accounts/sunetids).

Note that, in order to get a sponsored SUNetID, a monthly fee will be charged by University IT. Only people with spending authority may sponsor a SUNetID. Sponsorships can be obtained and paid for through [Sponsorship Manager](https://uit.stanford.edu/service/sponsorship/).  Current rates are available from the Sponsored Account [Rates page](https://uit.stanford.edu/rates/sponsorship).

FarmShare is meant for [**low- or moderate-risk data**](https://uit.stanford.edu/guide/riskclassifications), and is primarily intended for coursework or research purposes. It is not meant for sponsored research (where you have a dedicated source of funding), and is *not* approved for handling high-risk data.

## Sponsored Research

If you are doing sponsored or departmental research, then FarmShare might not be the right place for you. Instead, if the data you are working with is all low-risk, then you should consider our [Sherlock](https://www.sherlock.stanford.edu/) Cluster. 

If you are working with high-risk data then you should consider our [Nero GCP](https://nero-docs.stanford.edu/gcp-overview.html) or [Carina](https://carinadocs.sites.stanford.edu/) Computing platform. 

If you are working with complex AI you should consider our [Marlowe](https://docs.marlowe.stanford.edu/) Cluster.

# Getting Help

Most FarmShare support is provided during business hours, either via email or during academic-year office hours.

For email support, send a message to [srcc-support](mailto:srcc-support@stanford.edu?subject=FarmShare support). Make sure you have "FarmShare" somewhere in the subject line, and please be as detailed as possible with your request.

