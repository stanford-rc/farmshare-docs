# Welcome to FarmShare!

FarmShare is Stanford's community computing environment. It is intended for use in coursework and unsponsored research; it is not approved for use with high-risk data, or for use in sponsored research.

FarmShare evolved from the old, public UNIX cluster, once located on the second floor of Sweet Hall, which was itself a successor to systems like the University's original timeshare service, LOTS. FarmShare came online in Autumn Quarter 2016.

The FarmShare resources are focused on making it easier to learn how to parallelize research computing tasks and use research software including a “scheduler” or “distributed resource management system” to submit compute jobs. By using FarmShare, new researchers can more easily adapt to using larger clusters when they have big projects that involve using federally funded resources, shared Stanford clusters, or on a small grant funded cluster. Full SUNet (or sponsorship) required.

# Cluster Components

FarmShare consists of three classes of servers:

* The *rice* servers ...
* The *wheat* servers ...
* The *oat* servers ...

All FarmShare servers run [Ubuntu 22.04 LTS](https://wiki.ubuntu.com/NobleNumbat/ReleaseNotes)

FarmShare currently has 26 compute nodes along with 4 login nodes.

# Connecting

FarmShare uses SSH to make an encrypted connection from your computer to one of the cluster nodes.

To connect to one of the login nodes, ssh to *login.farmshare.stanford.edu* using your SUNetID. You will be connected to whichever rice node is the least-loaded at the time.

 ~~~
ssh SUNetID@login.farmshare.stanford.edu
~~~

# Using Software

FarmShare has lots of free and commercial software available to use. We provide software that comes with Ubuntu, software that we package ourselves, and we also provide the capability for you to build and use software yourself!

## Running Jobs

FarmShare uses the [Slurm](http://slurm.schedmd.com/) job-submission system. This is the same system used elsewhere in SRCC (FarmShare has its own installation, separate from the others). You can use Slurm to submit batch jobs (which run while your're away), start interactive jobs (which automatically connects you to a compute node), and request a general allocation of computing resources (so you can connect multiple times).

## Eligibility

FarmShare is available to anyone who has a full-service SUNetID. A full-service SUNetID is one that has email service; if you can successfully get to [Stanford Webmail](https://webmail.stanford.edu/), then you are eligible to use FarmShare 2 for academic work and small research jobs! If you do not already have a full-service SUNetID (maybe because you are a visiting researcher), you can get a sponsored full-service SUNetID. Read more about [SUNetID levels](https://uit.stanford.edu/service/accounts/sunetids).

Note that, in order to get a sponsored SUNetID, a monthly fee will be charged by University IT. Only people with spending authority may sponsor a SUNetID. Sponsorships can be obtained and paid for through [Sponsorship Manager](https://uit.stanford.edu/service/sponsorship/).  Current rates are available from the Sponsored Account [Rates page](https://uit.stanford.edu/rates/sponsorship).

FarmShare is meant for [low- or moderate-risk data](https://uit.stanford.edu/guide/riskclassifications), and is primarily intended for class work and for other general- and personal-use work (research and training). It is not meant for sponsored research (where you have a dedicated source of funding), and is not approved for handling high-risk data.

# Using Sherlock for Sponsored and Departmental Research

If you are doing sponsored or departmental research, then FarmShare might not be the right place for you. Instead, if the data you are working with is all low-risk, then you should consider getting access to Sherlock! The [Sherlock web site](https://www.sherlock.stanford.edu/docs/getting-started/#how-to-request-an-account) has more information about how to get access.

## Getting Help

Most FarmShare support is provided during business hours, either via email or during academic-year office hours.

For email support, send a message to [srcc-support](mailto:srcc-support@stanford.edu?subject=FarmShare 2 support). Make sure you have "FarmShare 2" somewhere in the subject line, and please be as detailed as possible with your request!

# Adding Capacity

FarmShare does not have a dedicated funding source available to it, and we appreciate any contributions that people can make.  For example:

* If you are using FarmShare for a class, let your department chair know that you are using it.
* If you are a registered student group using FarmShare, let your faculty representative and/or ASSU know that you are using it.
* If you have spare funds available, [email us](mailto:srcc-support@stanford.edu?subject=FarmShare 2 funds contribution) and we can arrange either a iJournals transfer to our PTA, or a capital purchase from your PTA.
* If you already have hardware being supported by SRCC, we may be able to use that hardware once you are done with it.

We appreciate anything you can do to get the word out about FarmShare and how awesome it is!
