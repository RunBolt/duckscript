var searchIndex = JSON.parse('{\
"duckscript":{"doc":"duckscript","i":[[5,"version","duckscript","Returns the library version.",null,[[],["string",3]]],[0,"parser","","parser",null,null],[5,"parse_file","duckscript::parser","parses the file and returns a vector of instructions",null,[[],[["scripterror",3],["result",4],["vec",3]]]],[5,"parse_text","","parses the provided script text and returns a vector of…",null,[[],[["scripterror",3],["result",4],["vec",3]]]],[0,"runner","duckscript","runner",null,null],[5,"run_script","duckscript::runner","Executes the provided script with the given context",null,[[["context",3]],[["scripterror",3],["context",3],["result",4]]]],[5,"run_script_file","","Executes the provided script file with the given context",null,[[["context",3]],[["scripterror",3],["context",3],["result",4]]]],[5,"repl","","Provides the REPL entry point",null,[[["context",3]],[["scripterror",3],["context",3],["result",4]]]],[5,"run_instruction","","Enables to evaluate a single instruction and return its…",null,[[["hashmap",3],["hashmap",3],["instruction",3],["commands",3],["vec",3]]]],[0,"types","duckscript","types",null,null],[0,"command","duckscript::types","command",null,null],[3,"Commands","duckscript::types::command","Holds and enables access to the runtime commands…",null,null],[12,"commands","","mapping between command names to implementations",0,null],[12,"aliases","","mapping between aliases to command names",0,null],[4,"GoToValue","","GoTo type value",null,null],[13,"Label","","label target",1,null],[13,"Line","","Line number",1,null],[4,"CommandResult","","Command execution result",null,null],[13,"Continue","","Holds the command output and tells the runner to continue…",2,null],[13,"GoTo","","Holds the command output and tells the runner to jump to…",2,null],[13,"Error","","Holds the error message and the meta info of the…",2,null],[13,"Crash","","Holds the critical error message and the meta info of the…",2,null],[13,"Exit","","Holds the command output and tells the runner to stop the…",2,null],[6,"CommandBox","","Defines a box reference for a command.",null,null],[8,"Command","","Defines the command capabilities",null,null],[10,"name","","The full command name which can be used to invoke this…",3,[[],["string",3]]],[11,"aliases","","A list of aliases that can also be used to invoke this…",3,[[],[["vec",3],["string",3]]]],[11,"help","","Command documentation.",3,[[],["string",3]]],[10,"clone_and_box","","Clones the command and returns a box reference.",3,[[],[["command",8],["box",3]]]],[11,"requires_context","","If true the run with the context will be invoked.",3,[[]]],[11,"run","","Runs the given instruction",3,[[["vec",3],["string",3]],["commandresult",4]]],[11,"run_with_context","","Run the instruction with access to the runtime context.",3,[[["string",3],["option",4],["hashmap",3],["vec",3],["hashmap",3],["vec",3],["commands",3]],["commandresult",4]]],[11,"new","","Creates and returns a new instance.",0,[[],["commands",3]]],[11,"set","","Adds a new command definition. It will fail in case…",0,[[["commandbox",6]],[["result",4],["scripterror",3]]]],[11,"get","","Return the command based on the given command name/alias",0,[[],[["option",4],["commandbox",6]]]],[11,"exists","","Return true if the command based on the given command…",0,[[]]],[11,"get_for_use","","Return the command based on the given command name/alias.…",0,[[],[["commandbox",6],["option",4]]]],[11,"get_all_command_names","","Returns all the command names currently registered",0,[[],[["vec",3],["string",3]]]],[11,"remove","","Removes the requested command.",0,[[]]],[0,"error","duckscript::types","error",null,null],[3,"ScriptError","duckscript::types::error","Script error struct",null,null],[12,"info","","Holds the error information",4,null],[4,"ErrorInfo","","Holds the error information",null,null],[13,"ErrorReadingFile","","Error Info Type",5,null],[13,"Initialization","","Error Info Type",5,null],[13,"Runtime","","Error Info Type",5,null],[13,"PreProcessNoCommandFound","","Error Info Type",5,null],[13,"ControlWithoutValidValue","","Error Info Type",5,null],[13,"InvalidControlLocation","","Error Info Type",5,null],[13,"MissingEndQuotes","","Error Info Type",5,null],[13,"MissingOutputVariableName","","Error Info Type",5,null],[13,"InvalidEqualsLocation","","Error Info Type",5,null],[13,"InvalidQuotesLocation","","Error Info Type",5,null],[13,"EmptyLabel","","Error Info Type",5,null],[13,"UnknownPreProcessorCommand","","Error Info Type",5,null],[0,"instruction","duckscript::types","instruction",null,null],[3,"PreProcessInstruction","duckscript::types::instruction","Preprocess instruction",null,null],[12,"command","","The command name",6,null],[12,"arguments","","The command arguments",6,null],[3,"ScriptInstruction","","Runtime script instruction",null,null],[12,"label","","The label tag",7,null],[12,"output","","The command output variable name",7,null],[12,"command","","The command name",7,null],[12,"arguments","","The command arguments",7,null],[3,"InstructionMetaInfo","","Meta information for all instruction types",null,null],[12,"line","","The line number",8,null],[12,"source","","The source file/url/...",8,null],[3,"Instruction","","Instruction data",null,null],[12,"meta_info","","Meta info",9,null],[12,"instruction_type","","The instruction",9,null],[4,"InstructionType","","Instruction Type - script, preprocess",null,null],[13,"Empty","","Empty instruction",10,null],[13,"PreProcess","","Preprocess instruction",10,null],[13,"Script","","Runtime script instruction",10,null],[8,"InstructionOperations","","Defines common instruction capabilities",null,null],[10,"is_actionable","","Returns true if this instruction has some actionable…",11,[[]]],[11,"new","","Creates and returns a new instance.",6,[[],["preprocessinstruction",3]]],[11,"new","","Creates and returns a new instance.",7,[[],["scriptinstruction",3]]],[11,"new","","Creates and returns a new instance.",8,[[],["instructionmetainfo",3]]],[0,"runtime","duckscript::types","runtime",null,null],[3,"Context","duckscript::types::runtime","The context structure",null,null],[12,"variables","","The runtime variables",12,null],[12,"state","","The runtime state",12,null],[12,"commands","","The command implementations",12,null],[3,"Runtime","","The runtime structure",null,null],[12,"instructions","","The script instructions",13,null],[12,"label_to_line","","Label to line number mapping",13,null],[12,"context","","The runtime context",13,null],[4,"StateValue","","enum defining what values can be stored in the state map",null,null],[13,"Boolean","","boolean value",14,null],[13,"Number","","signed number",14,null],[13,"UnsignedNumber","","unsigned number",14,null],[13,"Number32Bit","","signed number",14,null],[13,"UnsignedNumber32Bit","","unsigned number",14,null],[13,"Number64Bit","","signed number",14,null],[13,"UnsignedNumber64Bit","","unsigned number",14,null],[13,"String","","textual value",14,null],[13,"ByteArray","","byte (u8) array",14,null],[13,"List","","list",14,null],[13,"Set","","unique set of values",14,null],[13,"SubState","","sub state value",14,null],[13,"Any","","any value",14,null],[11,"new","","Creates and returns a new instance.",12,[[],["context",3]]],[11,"new","","Creates and returns a new instance.",13,[[["context",3]],["runtime",3]]],[11,"from","duckscript::types::command","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","duckscript::types::error","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","duckscript::types::instruction","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","duckscript::types::runtime","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"is_actionable","duckscript::types::instruction","Returns true if this instruction has some actionable…",6,[[]]],[11,"is_actionable","","Returns true if this instruction has some actionable…",7,[[]]],[11,"is_actionable","","Returns true if this instruction has some actionable…",9,[[]]],[11,"clone","duckscript::types::command","",1,[[],["gotovalue",4]]],[11,"clone","","",2,[[],["commandresult",4]]],[11,"clone","","",0,[[],["commands",3]]],[11,"clone","duckscript::types::instruction","",6,[[],["preprocessinstruction",3]]],[11,"clone","","",7,[[],["scriptinstruction",3]]],[11,"clone","","",10,[[],["instructiontype",4]]],[11,"clone","","",8,[[],["instructionmetainfo",3]]],[11,"clone","","",9,[[],["instruction",3]]],[11,"clone","duckscript::types::runtime","",14,[[],["statevalue",4]]],[11,"default","duckscript::types::instruction","",6,[[],["preprocessinstruction",3]]],[11,"default","","",7,[[],["scriptinstruction",3]]],[11,"default","","",8,[[],["instructionmetainfo",3]]],[11,"fmt","duckscript::types::command","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","duckscript::types::error","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","duckscript::types::instruction","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","duckscript::types::runtime","",14,[[["formatter",3]],["result",6]]],[11,"fmt","duckscript::types::error","Formats the script error using the given formatter.",4,[[["formatter",3]],[["result",4],["error",3]]]]],"p":[[3,"Commands"],[4,"GoToValue"],[4,"CommandResult"],[8,"Command"],[3,"ScriptError"],[4,"ErrorInfo"],[3,"PreProcessInstruction"],[3,"ScriptInstruction"],[3,"InstructionMetaInfo"],[3,"Instruction"],[4,"InstructionType"],[8,"InstructionOperations"],[3,"Context"],[3,"Runtime"],[4,"StateValue"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);