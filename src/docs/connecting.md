# Getting Connected

## SSH

SSH provides a secure, remote terminal connection to the login nodes. To connect, use the load-balanced name, `login.farmshare.stanford.edu`, which will automatically select one of the several login nodes based on load and utilization.

FarmShare conforms to Stanford's [Minimum Security Standards](https://uit.stanford.edu/guide/securitystandards), which require both a password (or equivalent credentials, like a [Kerberos](uit.stanford.edu/service/kerberos/) ticket) *and* [two-step authentication](https://uit.stanford.edu/service/authentication/twostep/). Public-key authentication is not supported.
    
### Host Keys

The following fingerprints can be used to verify FarmShare host keys when connecting.

!!! important "Host Key Fingerprints"
    `SHA256:bKb1Znir/1tOg+TMyALDYWeK0lclsulriDN8aOvWteU (ED25519)`
    `SHA256:o5E5OOkaxwF+CzKT5A2/DNSmDzljTYs/a1V7Fm6ssSw (RSA)`

When connecting for the first time, compare these to the fingerprint reported by `ssh`, and/or provide the corresponding fingerprint as an argument when prompted.

``` shell
ED25519 key fingerprint is SHA256:bKb1Znir/1tOg+TMyALDYWeK0lclsulriDN8aOvWteU.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? SHA256:bKb1Znir/1tOg+TMyALDYWeK0lclsulriDN8aOvWteU
```

### OpenSSH

Users on Linux, macOS, and Windows can use the terminal applications built into these operating systems and connect using the `ssh` command. If your local user name differs from your SUNet ID you must specify your own ID when connecting.

``` shell
$ ssh sunetid@login.farmshare.stanford.edu
```

!!! info "Windows Subsystem for Linux"
    On Windows, the [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about) is another option for a terminal interface.

An terminal session can be ended by running `exit` (or `logout`).

The example below shows how to login using your SUNet ID and password along with two-step authentication. To logout, run `exit` or `logout`.

``` shell
$ ssh sunetid@login.farmshare.stanford.edu
sunetid@login.farmshare.stanford.edu's password: 
(sunetid@login.farmshare.stanford.edu) Duo two-factor login for sunetid

Enter a passcode or select one of the following options:

 1. Duo Push to XXX-XXX-XXXX
 2. Phone call to XXX-XXX-XXXX
 3. SMS passcodes to XXX-XXX-XXXX

Passcode or option (1-3): 1
Success. Logging you in...
Welcome to Ubuntu 24.04.4 LTS (GNU/Linux 7.0.0-29-generic x86_64)
...
sunetid@rice-01$ exit
logout
Shared connection to login.farmshare.stanford.edu closed.
```

#### GSSAPI Authentication

FarmShare supports Kerberos/GSSAPI authentication (on operating systems and with clients that support it). Run `kinit` to authenticate.

``` shell
$ kinit sunetid@stanford.edu
sunetid@stanford.edu's password: 
```
Succesful authentication results in persistent credentials (a Kerberos "ticket") that can be used in place of a password when connecting. Run `klist` to examine existing credentials. Because Kerberos tickets have an extended lifetime (25 hours in the `stanford.edu` realm) and can be renewed (for up to 7 days) they can be more convenient than a password, which must be provided on every new connection.

GSSAPI authentication may need to be enabled on some platforms.

``` shell
# ~/.ssh/config

Host login.farmshare.stanford.edu
  GSSAPIKeyExchange yes
  GSSAPIAuthentication yes
  GSSAPIRenewalForcesRekey yes
  PreferredAuthentications gssapi-with-mic,publickey,keyboard-interactive,password
```

### Other SSH clients

#### PuTTY

[PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/) is a popular, freely available SSH client for Windows. The default settings are appropriate for most users; specify the `login.farmshare.stanford.edu` as the host name and click the Open button to connect.

#### MobaXterm

[MobaXterm](http://mobaxterm.mobatek.net/) is an SSH client with a built-in X server, making remote display extremely convenient. The Home Edition is free for personal use.

#### SecureCRT

[SecureCRT](https://uit.stanford.edu/software/scrt_sfx/) is a commercial SSH client for Windows and macOS that is licensed by the University as part of the [Essential Stanford Software](https://uit.stanford.edu/software/) suite.

## Mobile Shell (Mosh)

[Mosh](https://mosh.org/) is an alternative to SSH for Linux and macOS clients. It uses OpenSSH for authentication but manages its own, encrypted session. Mosh has some advantages, including predictive display (useful on high-latency connections) and improved network resiliency. Mosh connections can persist even when a computer's network location changes or a computer goes to sleep.

## Open OnDemand

[Open OnDemand](https://openondemand.org/) provides a browser-based interface to HPC clusters. The local instance, [FarmShare OnDemand](https://ondemand.farmshare.stanford.edu/), offers terminal, file manager, editor, desktop, and even GUI applications right from a web browser!

!!! warning "Invalid account or account/partition combination specified"
    Some important setup happens the very first time a user connects to a FarmShare login node; this error can indicate that setup has not yet occurred. Before attempting to submit another job (or start an OnDemand app) first select [FarmShare Shell Access](https://ondemand.farmshare.stanford.edu/pun/sys/shell/ssh) from the Clusters menu to satisfy the login requirement.
