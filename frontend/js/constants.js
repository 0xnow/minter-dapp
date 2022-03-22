const contractAddress = "0x6C405af80383B3bD4C192B6E893fD7CB12B2cA2A"; //Replace with your own contract address
const chain = 'rinkeby'; // rinkeby or polygon

const welcome_h1 = "Welcome to the NeonPol NFT Project!!";
const welcome_h2 = "Connect to MetaMask to Get your free mint";
const welcome_p = 'The NeonPol NFT Project is a decentralized, open-source project that aims to give you free NFT. Collab with <a href="https://artseries.art"  target="_blank" rel="noopener noreferrer">ArtSeries</a>';
const h1_presale_coming_soon = "NFT Drop Coming Soon!!";
const h1_presale_mint = "Pre-Sale Minting Open!!";
const h1_public_mint = "Public Minting Open!!";
const h2_presale_coming_soon = "Pre-Sale Minting Countdown";
const h2_presale_mint = "Public Minting Countdown";
const p_presale_coming_soon = "We are working hard to launch the NFT Collection. Stay tuned for updates!";
const p_presale_mint_not_whitelisted = "You are not whitelisted for the pre-sale.. 😢";
const p_presale_mint_whitelisted = "You're on the whitelist for the pre-sale! 🎉";
const p_presale_mint_already_minted = "You've already claimed your whitelist mint. Thank you! 🎉";
const p_public_mint = "No whitelist needed. Public minting is now open! 🎉";
const button_presale_coming_soon = "Get on the Whitelist";
const button_presale_mint_whitelisted = "Mint Your Special NFT";
const button_presale_mint_not_whitelisted = "Get on the Whitelist";
const button_presale_already_minted = "Join The Community";
const button_public_mint = "Mint Your NEONPOL";
const mint_failed = "Minting failed. 😢 Please try again.";

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "version",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "maxSupply",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mintPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokensPerMint",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "treasuryAddress",
                type: "address",
              },
            ],
            internalType: "struct NFTCollection.DeploymentConfig",
            name: "deploymentConfig",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "string",
                name: "baseURI",
                type: "string",
              },
              {
                internalType: "bool",
                name: "metadataUpdatable",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "publicMintStart",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "presaleMintStart",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "prerevealTokenURI",
                type: "string",
              },
              {
                internalType: "bytes32",
                name: "presaleMerkleRoot",
                type: "bytes32",
              },
            ],
            internalType: "struct NFTCollection.RuntimeConfig",
            name: "runtimeConfig",
            type: "tuple",
          },
        ],
        internalType: "struct NFTCollection.ContractInfo",
        name: "info",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "maxSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokensPerMint",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "treasuryAddress",
            type: "address",
          },
        ],
        internalType: "struct NFTCollection.DeploymentConfig",
        name: "deploymentConfig",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "baseURI",
            type: "string",
          },
          {
            internalType: "bool",
            name: "metadataUpdatable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "publicMintStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "presaleMintStart",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "prerevealTokenURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "presaleMerkleRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTCollection.RuntimeConfig",
        name: "runtimeConfig",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "isWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "metadataUpdatable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintingActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prerevealTokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleMerkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "presaleMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleMintStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicMintStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokensPerMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferAdminRights",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasuryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "baseURI",
            type: "string",
          },
          {
            internalType: "bool",
            name: "metadataUpdatable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "publicMintStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "presaleMintStart",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "prerevealTokenURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "presaleMerkleRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTCollection.RuntimeConfig",
        name: "newConfig",
        type: "tuple",
      },
    ],
    name: "updateConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  
];
/* because me lazy */
Object.getOwnPropertyNames(Math).map(function (p) {
	window[p] = Math[p];
});

var HEX_CRAD = 32,
	HEX_BG = "#171717",
	HEX_HL = "#2a2a2a",
	HEX_HLW = 2,
	HEX_GAP = 4,
	NEON_PALETE = [
		"#cb3301",
		"#ff0066",
		"#ff6666",
		"#feff99",
		"#ffff67",
		"#ccff66",
		"#99fe00",
		"#fe99ff",
		"#ff99cb",
		"#fe349a",
		"#cc99fe",
		"#6599ff",
		"#00ccff",
		"#ffffff"
	],
	T_SWITCH = 64,
	unit_x = 3 * HEX_CRAD + HEX_GAP * sqrt(3),
	unit_y = HEX_CRAD * sqrt(3) * 0.5 + 0.5 * HEX_GAP,
	off_x = 1.5 * HEX_CRAD + HEX_GAP * sqrt(3) * 0.5,
	/* extract a work palette */
	wp = NEON_PALETE.map(function (c) {
		var num = parseInt(c.replace("#", ""), 16);

		return {
			r: (num >> 16) & 0xff,
			g: (num >> 8) & 0xff,
			b: num & 0xff
		};
	}),
	nwp = wp.length,
	csi = 0,
	f = 1 / T_SWITCH,
	c = document.querySelectorAll("canvas"),
	n = c.length,
	w,
	h,
	_min,
	ctx = [],
	grid,
	source = null,
	t = 0,
	request_id = null;

var GridItem = function (x, y) {
	this.x = x || 0;
	this.y = y || 0;
	this.points = { hex: [], hl: [] };

	this.init = function () {
		var x,
			y,
			a,
			ba = PI / 3,
			ri = HEX_CRAD - 0.5 * HEX_HLW;

		for (var i = 0; i < 6; i++) {
			a = i * ba;
			x = this.x + HEX_CRAD * cos(a);
			y = this.y + HEX_CRAD * sin(a);

			this.points.hex.push({
				x: x,
				y: y
			});

			if (i > 2) {
				x = this.x + ri * cos(a);
				y = this.y + ri * sin(a);

				this.points.hl.push({
					x: x,
					y: y
				});
			}
		}
	};

	this.draw = function (ct) {
		for (var i = 0; i < 6; i++) {
			ct[(i === 0 ? "move" : "line") + "To"](
				this.points.hex[i].x,
				this.points.hex[i].y
			);
		}
	};

	this.highlight = function (ct) {
		for (var i = 0; i < 3; i++) {
			ct[(i === 0 ? "move" : "line") + "To"](
				this.points.hl[i].x,
				this.points.hl[i].y
			);
		}
	};

	this.init();
};

var Grid = function (rows, cols) {
	this.cols = cols || 16;
	this.rows = rows || 16;
	this.items = [];
	this.n = this.items.length;

	this.init = function () {
		var x, y;

		for (var row = 0; row < this.rows; row++) {
			y = row * unit_y;

			for (var col = 0; col < this.cols; col++) {
				x = (row % 2 == 0 ? 0 : off_x) + col * unit_x;

				this.items.push(new GridItem(x, y));
			}
		}

		this.n = this.items.length;
	};

	this.draw = function (ct) {
		ct.fillStyle = HEX_BG;
		ct.beginPath();

		for (var i = 0; i < this.n; i++) {
			this.items[i].draw(ct);
		}

		ct.closePath();
		ct.fill();

		ct.strokeStyle = HEX_HL;
		ct.beginPath();

		for (var i = 0; i < this.n; i++) {
			this.items[i].highlight(ct);
		}

		ct.closePath();
		ct.stroke();
	};

	this.init();
};

var init = function () {
	var s = getComputedStyle(c[0]),
		rows,
		cols;

	w = ~~s.width.split("px")[0];
	h = ~~s.height.split("px")[0];
	_min = 0.75 * min(w, h);

	rows = ~~(h / unit_y) + 2;
	cols = ~~(w / unit_x) + 2;

	for (var i = 0; i < n; i++) {
		c[i].width = w;
		c[i].height = h;
		ctx[i] = c[i].getContext("2d");
	}

	grid = new Grid(rows, cols);
	grid.draw(ctx[1]);

	if (!source) {
		source = { x: ~~(w / 2), y: ~~(h / 2) };
	}

	neon();
};

var neon = function () {
	var k = (t % T_SWITCH) * f,
		rgb = {
			r: ~~(wp[csi].r * (1 - k) + wp[(csi + 1) % nwp].r * k),
			g: ~~(wp[csi].g * (1 - k) + wp[(csi + 1) % nwp].g * k),
			b: ~~(wp[csi].b * (1 - k) + wp[(csi + 1) % nwp].b * k)
		},
		rgb_str = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")",
		light = ctx[0].createRadialGradient(
			source.x,
			source.y,
			0,
			source.x,
			source.y,
			0.875 * _min
		),
		stp;

	stp = 0.5 - 0.5 * sin(7 * t * f) * cos(5 * t * f) * sin(3 * t * f);

	light.addColorStop(0, rgb_str);
	light.addColorStop(stp, "rgba(0,0,0,.03)");

	fillBackground("rgba(0,0,0,.02)");
	fillBackground(light);

	t++;

	if (t % T_SWITCH === 0) {
		csi++;

		if (csi === nwp) {
			csi = 0;
			t = 0;
		}
	}

	request_id = requestAnimationFrame(neon);
};

var fillBackground = function (bg_fill) {
	ctx[0].fillStyle = bg_fill;
	ctx[0].beginPath();
	ctx[0].rect(0, 0, w, h);
	ctx[0].closePath();
	ctx[0].fill();
};

init();

addEventListener("resize", init, false);

addEventListener(
	"mousemove",
	function (e) {
		source = { x: e.clientX, y: e.clientY };
	},
	false
);

