/**
 * BLOCK: Forms - Upload
 */

import UAGB_Block_Icons from "../../../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/forms-upload", {
	title: uagb_blocks_info.blocks["uagb/forms-upload"]["title"],
	description: uagb_blocks_info.blocks["uagb/forms-upload"]["description"],
	icon: UAGB_Block_Icons.faq,
	category: uagb_blocks_info.category,
	parent: [ "uagb/forms" ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	example:{},
	save
} )