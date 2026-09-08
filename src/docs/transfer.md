# Transferring Data

FarmShare supports transfering files with any client that can use SSH as a transport, or using [Globus](#globus) (GridFTP).

!!! important "Data Transfer Nodes"
    FarmShare login nodes can be used for small-scale data transfers, but for large transfers a *data transfer node* (DTN) is preferred; use `dtn.farmshare.stanford.edu` as the transfer host.

## SSH Transport

Clients that use SSH as a transport for data transfers include both command-line tools like `scp`, `rsync`, and `rclone`, and applications with a graphical user interface like [SecureFX](https://uit.stanford.edu/software/scrt_sfx), [WinSCP](https://winscp.net/), and [Cyberduck](https://cyberduck.io/). `scp` works much like the standard Linux command `cp` and is useful for quick transfers involving just one or a few files; `rsync` can be used for transfers of entire directories or directory trees, and can efficiently sync local and remote files by transferring only data that has changed at the source. `rclone` can be used to transfer data from a personal computer to FarmShare using SSH, or from supported cloud storage sources when used as a client on a FarmShare login or compute node.

## Globus

[Globus](https://www.globus.org/) is browser-based interface for data management and transfers. It can be used for moving files between a personal computer and FarmShare, or between FarmShare and other Globus endpoints both here at Stanford (for example, Sherlock or Oak) and elsewhere. It provides the best performance for large transfers.

!!! info "FarmShare Globus Endpoint"
    To connect directly to the FarmShare Globus endpoint, [SRCC FarmShare](https://app.globus.org/file-manager?origin_id=13818aec-5644-11e9-9e6e-0266b1fe9f9e), authenticate using ogranization "Stanford University." Globus can also be accessed from FarmShare OnDemand using the [Files](https://ondemand.farmshare.stanford.edu/pun/sys/dashboard/files/) app.
