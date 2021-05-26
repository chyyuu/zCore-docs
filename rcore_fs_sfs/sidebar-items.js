initSidebarItems({"constant":[["BLKBITS","number of bits in a block"],["BLKN_FREEMAP","1st block of the freemap"],["BLKN_ROOT","location of the root dir inode"],["BLKN_SUPER","block the superblock lives in"],["BLKSIZE","size of block"],["BLKSIZE_LOG2","log2( size of block )"],["BLK_NENTRY","number of entries in a block"],["DEFAULT_INFO","default sfs infomation string"],["DIRENT_SIZE","size of a dirent used in the size field"],["ENTRY_SIZE","size of one entry"],["MAGIC","magic number for sfs"],["MAX_FILE_SIZE","max file size in theory (48KB + 4MB + 4GB) however, the file size is stored in u32"],["MAX_FNAME_LEN","max length of filename"],["MAX_INFO_LEN","max length of infomation"],["MAX_NBLOCK_DIRECT","max number of blocks with direct blocks"],["MAX_NBLOCK_DOUBLE_INDIRECT","max number of blocks with double indirect blocks"],["MAX_NBLOCK_INDIRECT","max number of blocks with indirect blocks"],["NDIRECT","number of direct blocks in inode"],["NODEVICE",""]],"enum":[["FileType","file types"]],"struct":[["DiskEntry","file entry (on disk)"],["DiskINode","inode (on disk)"],["INodeImpl","INode for SFS"],["IndirectBlock",""],["SimpleFileSystem","filesystem for sfs"],["Str256",""],["Str32",""],["SuperBlock","On-disk superblock"]],"trait":[["AsBuf","Convert structs to [u8] slice"]],"type":[["BlockId",""],["DeviceINode",""],["INodeId",""]]});