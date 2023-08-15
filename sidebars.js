module.exports = {
  docs: [
    'welcome',
    {
      type: 'category',
      label: 'About Mina',
      items: [
        'about-mina/index',
        'about-mina/what-are-zero-knowledge-proofs',
        'about-mina/protocol-architecture',
        'about-mina/consensus',
        'about-mina/faq',
        {
          type: 'link',
          label: 'Whitepaper',
          href: 'https://minaprotocol.com/wp-content/uploads/economicsWhitepaper.pdf',
        },
      ],
    },
    {
      type: 'category',
      label: 'Using Mina',
      items: [
        'using-mina/install-a-wallet',
        'using-mina/ledger-hardware-wallet',
        'using-mina/how-to-send-and-receive',
        'using-mina/how-to-delegate',
        'using-mina/how-to-use-zkapp',
      ],
    },
    {
      type: 'category',
      label: 'zkApp Developers',
      items: [
        'zkapps/index',
        'zkapps/how-zkapps-work',
        {
          type: 'category',
          label: 'Creating zkApps',
          items: [
            'zkapps/how-to-write-a-zkapp',
            'zkapps/how-to-write-a-zkapp-ui',
            'zkapps/how-to-test-a-zkapp',
            'zkapps/how-to-deploy-a-zkapp',
          ],
        },
        {
          type: 'category',
          label: 'SnarkyJS',
          items: [
            'zkapps/snarkyjs/index',
            'zkapps/snarkyjs/basic-concepts',
            'zkapps/snarkyjs/smart-contracts',
            'zkapps/snarkyjs/interact-with-mina',
            'zkapps/snarkyjs/events',
            'zkapps/snarkyjs/actions-and-reducer',
            'zkapps/snarkyjs/fetch-events-and-actions',
            'zkapps/snarkyjs/on-chain-values',
            'zkapps/snarkyjs/recursion',
            'zkapps/snarkyjs/custom-tokens',
            'zkapps/snarkyjs/merkle-tree',
            'zkapps/snarkyjs/permissions',
            'zkapps/snarkyjs/time-locked-accounts',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'zkapps/tutorials/index',
            'zkapps/tutorials/hello-world',
            'zkapps/tutorials/private-inputs-hash-functions',
            'zkapps/tutorials/deploying-to-a-network',
            'zkapps/tutorials/zkapp-ui-with-react',
            'zkapps/tutorials/common-types-and-functions',
            'zkapps/tutorials/offchain-storage',
            'zkapps/tutorials/oracle',
            'zkapps/tutorials/custom-tokens',
            'zkapps/tutorials/recursion',
            'zkapps/tutorials/account-updates',
            'zkapps/tutorials/advanced-account-updates',
            'zkapps/tutorials/anonymous-message-board',
            'zkapps/tutorials/interacting-with-zkapps-server-side',
          ],
        },
        {
          type: 'category',
          label: 'SnarkyJS Reference',
          items: [
            {
              type: 'doc',
              id: 'zkapps/snarkyjs-reference/README',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'zkapps/snarkyjs-reference/modules',
              label: 'Overview',
            },
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/AccountUpdate',
                  label: 'AccountUpdate',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Bool',
                  label: 'Bool',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Character',
                  label: 'Character',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Circuit',
                  label: 'Circuit',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/CircuitString',
                  label: 'CircuitString',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/CircuitValue',
                  label: 'CircuitValue',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Field',
                  label: 'Field',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Group',
                  label: 'Group',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Int64',
                  label: 'Int64',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Keypair',
                  label: 'Keypair',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Ledger',
                  label: 'Ledger',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/MerkleMap',
                  label: 'MerkleMap',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/MerkleMapWitness',
                  label: 'MerkleMapWitness',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/MerkleTree',
                  label: 'MerkleTree',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Nullifier',
                  label: 'Nullifier',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/PrivateKey',
                  label: 'PrivateKey',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Proof',
                  label: 'Proof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Scalar',
                  label: 'Scalar',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/SelfProof',
                  label: 'SelfProof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Sign',
                  label: 'Sign',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Signature',
                  label: 'Signature',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/SmartContract',
                  label: 'SmartContract',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Token',
                  label: 'Token',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/TokenSymbol',
                  label: 'TokenSymbol',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/Types.PublicKey',
                  label: 'Types.PublicKey',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/UInt32',
                  label: 'UInt32',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/UInt64',
                  label: 'UInt64',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/classes/VerificationKey',
                  label: 'VerificationKey',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/interfaces/Mina.TransactionId',
                  label: 'Mina.TransactionId',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/interfaces/Permissions',
                  label: 'Permissions',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/interfaces/Provable',
                  label: 'Provable',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/interfaces/ProvablePure',
                  label: 'ProvablePure',
                },
              ],
            },
            {
              type: 'category',
              label: 'Modules',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Encoding',
                  label: 'Encoding',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Encryption',
                  label: 'Encryption',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Experimental',
                  label: 'Experimental',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Mina',
                  label: 'Mina',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Pickles',
                  label: 'Pickles',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Snarky',
                  label: 'Snarky',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Types.Json',
                  label: 'Types.Json',
                },
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/modules/Types',
                  label: 'Types',
                },
              ],
            },
            {
              type: 'category',
              label: 'Enums',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/snarkyjs-reference/enums/FieldType',
                  label: 'FieldType',
                },
              ],
            },
          ],
        },
        'zkapps/roadmap',
        'zkapps/faq',
        'zkapps/zkapps-for-ethereum-developers',
      ],
    },
    {
      type: 'category',
      label: 'Node Operators',
      items: [
        'node-operators/index',
        'node-operators/getting-started',
        'node-operators/archive-node',
        'node-operators/archive-redundancy',
        'node-operators/foundation-delegation-program',
        'node-operators/delegation-tiebreak',
        'node-operators/bp-sidecar',
        'node-operators/uptime-tracking-system',
        'node-operators/mina-signer',
        'node-operators/querying-data',
        'node-operators/connecting-to-devnet',
        'node-operators/hardforks',
        'node-operators/hot-cold-block-production',
        'node-operators/rosetta',
        'node-operators/proof-of-stake',
        'node-operators/snark-workers',
        'node-operators/scan-state',
        'node-operators/time-locked-accounts',
        'node-operators/block-producers',
        'node-operators/whats-in-a-block',
        'node-operators/lifecycle-of-a-payment',
        'node-operators/seed-peers',
        'node-operators/staking-service-guidelines',
        'node-operators/troubleshooting',
        'node-operators/faq',
        'node-operators/generating-a-keypair',
        'node-operators/connecting-to-the-network',
        'node-operators/sending-a-payment',
        'node-operators/staking-and-snarking',
        'node-operators/mina-cli-reference',
      ],
    },
    {
      type: 'category',
      label: 'Node Developers',
      items: [
        'node-developers/index',
        'node-developers/codebase-overview',
        'node-developers/repository-structure',
        'node-developers/bip44',
        'node-developers/code-review-guidelines',
        'node-developers/style-guide',
        'node-developers/sandbox-node',
        'node-developers/graphql-api',
        'node-developers/client-sdk',
        'node-developers/contributing',
        'node-developers/logging',
      ],
    },
    {
      type: 'category',
      label: 'Exchange Operators',
      items: ['exchange-operators/faq'],
    },
    {
      type: 'category',
      label: 'Participate',
      items: [
        'participate/online-communities',
        'participate/office-hours',
        'participate/grants-and-programs',
        'participate/careers',
        'participate/github',
        'participate/bugs-and-feature-requests',
      ],
    },
    'glossary',
    'experimental',    
  ],
};
