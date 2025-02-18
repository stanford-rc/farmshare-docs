# Transferring Research Data

## Overview

A variety of methods are available for secure and efficient data transfer. There are two methods of data transfer: 

* Command-line tools (scp, rsync, sftp, rclone)
* Graphical tools ([WinSCP](https://winscp.net/), [Cyberduck](https://cyberduck.io/), [Globus](#globus))

!!! note "For large transfers, using DTN is recommended"
    Quick transfers are ok on the login nodes. The preferred (fastest) method for large transfers is our DTN (data transfer node): `dtn.farmshare.stanford.edu`

## SCP

Secure Copy (scp) uses [ssh](connecting.md#ssh) for data transfer and authentication. It works like the `cp` command, except it can work over the network to copy files between a local host and a remote host.

Example to copy a single file from a local computer to your home directory (`~/`) on FarmShare:

``` shell
$ scp alpine-standard-3.21.2-aarch64.iso ta5@dtn.farmshare.stanford.edu:~
ta5@dtn.farmshare.stanford.edu's password: 
Autopushing login request to phone...
Success. Logging you in...
alpine-standard-3.21.2-aarch64.iso            100%  253MB   1.3MB/s   03:18    
```

The process is similar for other ssh based tools like rsync, sftp.

## Globus

[Globus](https://www.globus.org/data-transfer) is browser based interface for data management and transfers. It can be used for data transfers from a personal computer to FarmShare. It is useful for large transfers and will provide the best transfer speeds.

### Setup

To use Globus, you will first need to authenticate at [Globus.org](https://www.globus.org/). You can either sign up for a Globus account, or use your SUNet ID account for authentication to Globus (which will be required to authenticate to the FarmShare endpoint).

To use your SUNet ID, choose "Stanford University" from the drop down menu at the Login page and follow the instructions from there.

### Transfer

!!! note "FarmShare Endpoint"
    Connect to the `SRCC FarmShare` endpoint: [https://app.globus.org](https://app.globus.org/file-manager?origin_id=13818aec-5644-11e9-9e6e-0266b1fe9f9e).

