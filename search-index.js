var searchIndex = JSON.parse('{\
"markdown_composer":{"doc":"","i":[[0,"builders","markdown_composer","Contains builders for all Markdown content types.",null,null],[0,"image","markdown_composer::builders","",null,null],[3,"ImageBuilder","markdown_composer::builders::image","",null,null],[11,"new","","",0,[[]]],[11,"footer","","",0,[[]]],[11,"text","","",0,[[]]],[11,"url","","",0,[[]]],[11,"build","","",0,[[],["image",3]]],[0,"link","markdown_composer::builders","",null,null],[3,"LinkBuilder","markdown_composer::builders::link","",null,null],[11,"new","","",1,[[]]],[11,"text","","",1,[[]]],[11,"url","","",1,[[]]],[11,"footer","","",1,[[]]],[11,"inlined","","",1,[[]]],[11,"build","","",1,[[],["link",3]]],[0,"list","markdown_composer::builders","",null,null],[3,"ListBuilder","markdown_composer::builders::list","",null,null],[11,"new","","",2,[[]]],[11,"add","","",2,[[]]],[11,"ordered","","",2,[[],["list",3]]],[11,"unordered","","",2,[[],["list",3]]],[0,"extensions","markdown_composer","This provide provides certain markdown feature extensions…",null,null],[0,"github","markdown_composer::extensions","Markdown extensions defined by GitHub.",null,null],[3,"CheckmarkItem","markdown_composer::extensions::github","A checkbox list item.",null,null],[12,"checked","","The state of the item.",3,null],[12,"text","","The text of the checkbox item.",3,null],[8,"Strikethrough","","An extension trait for strikethrough transformations.",null,null],[10,"strikethrough","","Transforms the given text to be strikethrough.",4,[[],["string",3]]],[11,"new","","Creates a new default checkmark item.",3,[[]]],[11,"from","","Creates a mew checkmark item with the given values.",3,[[]]],[0,"traits","markdown_composer","Contains Markdown trait definitions.",null,null],[8,"AsFooter","markdown_composer::traits","A MarkdownElement that can be rendered as a footer value.",null,null],[10,"as_footer","","Returns the `MarkdownElement` that can be used to render…",5,[[],[["box",3],["markdownelement",8]]]],[8,"MarkdownElement","","An element that can be rendered as to markdown.",null,null],[10,"render","","Renders the element to mardown.",6,[[],["string",3]]],[0,"transforms","markdown_composer","Contains extension traits that can used to transform text…",null,null],[8,"BlockQuote","markdown_composer::transforms","An extension trait for block quote transformation.",null,null],[10,"block_quote","","Transforms the given text into a block quote.",7,[[],["string",3]]],[10,"block_quote_multi_line","","Transforms the given text into a multiline block quote.",7,[[],["string",3]]],[8,"Bold","","An extension trait for bold transformations.",null,null],[10,"bold","","Transforms the given text into its bold version.",8,[[],["string",3]]],[8,"CodeBlock","","An extension trait for code block transformations.",null,null],[10,"code_block","","Transforms the given text into a code block.",9,[[],["string",3]]],[10,"code_block_with_language","","Transforms the given text into a code block, allowing to…",9,[[["asref",8]],["string",3]]],[8,"Inline","","An extension trait for inline transformations.",null,null],[10,"inline","","Transforms the given text into an inline code block.",10,[[],["string",3]]],[8,"Italic","","An extension trait for italic transformations.",null,null],[10,"italic","","Transforms the given text into its italic variant.",11,[[],["string",3]]],[0,"types","markdown_composer","This module defines all Markdown types that are specified…",null,null],[0,"header","markdown_composer::types","",null,null],[3,"HeaderLevel","markdown_composer::types::header","The level of a header.",null,null],[3,"Header","","A markdown header.",null,null],[12,"text","","The header text.",12,null],[12,"level","","The header level.",12,null],[11,"new","","Creates a new default header level of 1.",13,[[]]],[11,"from","","Creates a new header level.",13,[[]]],[11,"new","","Creates a new empty header with a level of 1.",12,[[]]],[11,"from","","Creates a new header.",12,[[]]],[0,"image","markdown_composer::types","",null,null],[3,"Image","markdown_composer::types::image","A markdown image.",null,null],[12,"footer","","Whether the image\'s link should be added as a footer…",14,null],[12,"text","","The text of the image.",14,null],[12,"url","","The url of the image.",14,null],[11,"new","","Creates a new default `Image`.",14,[[]]],[11,"from","","Creates a new `Image` with the given values.",14,[[]]],[0,"link","markdown_composer::types","",null,null],[3,"Link","markdown_composer::types::link","A markdown link.",null,null],[12,"text","","The text of the link.",15,null],[12,"url","","The url of the link.",15,null],[12,"footer","","Whether the `Link`\'s url should be rendered as a footer.",15,null],[12,"inlined","","Whether the link should be inlined (no new line).",15,null],[11,"new","","Creates a new default `Link`.",15,[[]]],[11,"from","","Creates a new `Link` with the given values.",15,[[]]],[0,"list","markdown_composer::types","",null,null],[3,"List","markdown_composer::types::list","A markdown list.",null,null],[12,"items","","The items of the list.",16,null],[12,"ordered","","`True` if the list should be ordered.",16,null],[6,"ListItem","","An item inside a markdown list.",null,null],[11,"new","","Creates a new default `List`.",16,[[]]],[11,"ordered","","Creates a new empty ordered `List`.",16,[[]]],[11,"ordered_with","","Creates a new ordered `List` with the given items.",16,[[["vec",3],["listitem",6]]]],[11,"unordered","","Creates a new empty unordered `List`.",16,[[]]],[11,"unordered_with","","Creates a new unordered list with the given items.",16,[[["vec",3],["listitem",6]]]],[11,"add","","Adds an item to the list.",16,[[["listitem",6]]]],[0,"markdown","markdown_composer::types","",null,null],[3,"Markdown","markdown_composer::types::markdown","",null,null],[12,"elements","","",17,null],[12,"footers","","",17,null],[11,"new","","",17,[[]]],[11,"with","","",17,[[["vec",3],["box",3]]]],[11,"with_remark","","Creates a new markdown file, pre-populating it with the…",17,[[]]],[11,"header","","",17,[[]]],[11,"header1","","",17,[[]]],[11,"header2","","",17,[[]]],[11,"header3","","",17,[[]]],[11,"header4","","",17,[[]]],[11,"header5","","",17,[[]]],[11,"header6","","",17,[[]]],[11,"list","","",17,[[["list",3]]]],[11,"link","","",17,[[["link",3]]]],[11,"paragraph","","",17,[[]]],[11,"render","","",17,[[],["string",3]]],[0,"paragraph","markdown_composer::types","",null,null],[3,"Paragraph","markdown_composer::types::paragraph","A markdown paragraph.",null,null],[12,"text","","The text inside the paragraph.",18,null],[11,"from","","Creates a new paragraph with the given text.",18,[[]]],[17,"PRELIMINARY_REMARK","markdown_composer","",null,null],[11,"from","markdown_composer::builders::image","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"clone_box","","",0,[[]]],[11,"from","markdown_composer::builders::link","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"clone_box","","",1,[[]]],[11,"from","markdown_composer::builders::list","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"clone_box","","",2,[[]]],[11,"render","markdown_composer::extensions::github","",3,[[],["string",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"to_string","","",3,[[],["string",3]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"clone_box","","",3,[[]]],[11,"from","markdown_composer::types::header","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"clone_box","","",13,[[]]],[11,"render","","",12,[[],["string",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"to_string","","",12,[[],["string",3]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"clone_box","","",12,[[]]],[11,"render","markdown_composer::types::image","",14,[[],["string",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"to_string","","",14,[[],["string",3]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"clone_box","","",14,[[]]],[11,"render","markdown_composer::types::link","",15,[[],["string",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"to_string","","",15,[[],["string",3]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"clone_box","","",15,[[]]],[11,"render","markdown_composer::types::list","",16,[[],["string",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"to_string","","",16,[[],["string",3]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"clone_box","","",16,[[]]],[11,"from","markdown_composer::types::markdown","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_string","","",17,[[],["string",3]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"render","markdown_composer::types::paragraph","",18,[[],["string",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"to_string","","",18,[[],["string",3]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"clone_box","","",18,[[]]],[11,"as_footer","markdown_composer::types::image","",14,[[],[["box",3],["markdownelement",8]]]],[11,"as_footer","markdown_composer::types::link","",15,[[],[["box",3],["markdownelement",8]]]],[11,"from","markdown_composer::types::header","",13,[[]]],[11,"from","markdown_composer::types::list","",16,[[["list",3]]]],[11,"clone","markdown_composer::builders::image","",0,[[],["imagebuilder",3]]],[11,"clone","markdown_composer::builders::link","",1,[[],["linkbuilder",3]]],[11,"clone","markdown_composer::builders::list","",2,[[],["listbuilder",3]]],[11,"clone","markdown_composer::extensions::github","",3,[[],["checkmarkitem",3]]],[11,"clone","markdown_composer::types::header","",13,[[],["headerlevel",3]]],[11,"clone","","",12,[[],["header",3]]],[11,"clone","markdown_composer::types::image","",14,[[],["image",3]]],[11,"clone","markdown_composer::types::link","",15,[[],["link",3]]],[11,"clone","markdown_composer::types::list","",16,[[],["list",3]]],[11,"clone","markdown_composer::types::paragraph","",18,[[],["paragraph",3]]],[11,"default","markdown_composer::builders::image","",0,[[],["imagebuilder",3]]],[11,"default","markdown_composer::builders::link","",1,[[],["linkbuilder",3]]],[11,"default","markdown_composer::builders::list","",2,[[],["listbuilder",3]]],[11,"default","markdown_composer::extensions::github","",3,[[],["checkmarkitem",3]]],[11,"default","markdown_composer::types::header","Returns the default header level (1).",13,[[]]],[11,"default","","",12,[[],["header",3]]],[11,"default","markdown_composer::types::image","",14,[[],["image",3]]],[11,"default","markdown_composer::types::link","",15,[[],["link",3]]],[11,"default","markdown_composer::types::list","",16,[[],["list",3]]],[11,"default","markdown_composer::types::markdown","",17,[[],["markdown",3]]],[11,"eq","markdown_composer::builders::image","",0,[[["imagebuilder",3]]]],[11,"ne","","",0,[[["imagebuilder",3]]]],[11,"eq","markdown_composer::builders::link","",1,[[["linkbuilder",3]]]],[11,"ne","","",1,[[["linkbuilder",3]]]],[11,"eq","markdown_composer::types::header","",13,[[["headerlevel",3]]]],[11,"ne","","",13,[[["headerlevel",3]]]],[11,"eq","","",12,[[["header",3]]]],[11,"ne","","",12,[[["header",3]]]],[11,"fmt","markdown_composer::builders::image","",0,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::builders::link","",1,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::builders::list","",2,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::extensions::github","",3,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::header","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::image","",14,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::link","",15,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::list","",16,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::paragraph","",18,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::extensions::github","",3,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::header","",12,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::image","",14,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::link","",15,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::list","",16,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::markdown","",17,[[["formatter",3]],["result",6]]],[11,"fmt","markdown_composer::types::paragraph","",18,[[["formatter",3]],["result",6]]],[11,"builder","markdown_composer::types::image","",14,[[],["imagebuilder",3]]],[11,"builder","markdown_composer::types::link","",15,[[],["linkbuilder",3]]],[11,"builder","markdown_composer::types::list","",16,[[],["listbuilder",3]]]],"p":[[3,"ImageBuilder"],[3,"LinkBuilder"],[3,"ListBuilder"],[3,"CheckmarkItem"],[8,"Strikethrough"],[8,"AsFooter"],[8,"MarkdownElement"],[8,"BlockQuote"],[8,"Bold"],[8,"CodeBlock"],[8,"Inline"],[8,"Italic"],[3,"Header"],[3,"HeaderLevel"],[3,"Image"],[3,"Link"],[3,"List"],[3,"Markdown"],[3,"Paragraph"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);