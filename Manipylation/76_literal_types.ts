type ReadOrWrite = 'read' | 'write'


// type Access = `can${ Uppercase<ReadOrWrite>}`;
type Access = `can${ Capitalize<ReadOrWrite>}`;
