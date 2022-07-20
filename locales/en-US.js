export default {
  global: {
    appName: 'DataElementHub',
    mainMenu: {
      home: 'Home',
      mainView: 'Main View',
      namespaces: 'Namespaces',
      dataElements: 'Data Elements',
      groups: 'Groups',
      records: 'Records',
      valueSets: 'Value Sets',
      workspace: {
        workspace: 'Workspace',
        staging: 'Staging',
        drafts: 'Drafts',
        validate: 'Validate'
      },
      view: {
        view: 'View',
        myData: 'My data',
        public: 'Public data',
        valueSets: 'Value Sets'
      },
      tools: {
        tools: 'Tools',
        namespaceComparison: 'Namespace Comparison',
        mapping: 'Mapping',
        visualizer: 'Visualizer',
        importExport: 'Import / Export',
        search: 'Search'
      },
      settings: 'Settings',
      about: 'About',
      help: 'Help'
    },
    alerts: {
      warning: 'WARNING!',
      defineLanguage: 'Preferred Language is not defined.'
    },
    button: {
      save: 'Save',
      cancel: 'Cancel',
      add: 'Add',
      create: 'Create',
      edit: 'Edit',
      delete: 'Delete',
      close: 'Close',
      showInTreeView: 'SHOW IN TREEVIEW'
    },
    public: 'PUBLIC',
    hidden: 'HIDDEN',
    imi: 'Institute for Medical Informatics',
    login: 'LOG IN',
    addItem: 'ADD ITEM',
    dragAndDrop: 'simply drag and drop',
    metaData: 'Meta Data',
    status: 'Status',
    noItems: 'No Items Available',
    addNamespaces: 'Add New Namespaces by clicking on the CREATE NAMESPACE button',
    type: 'Type',
    namespace: 'Namespace',
    identifier: 'Identifier',
    revision: 'Revision',
    urn: 'URN',
    namespaceIdentifier: 'NAMESPACE IDENTIFIER',
    elementIdentifier: 'ELEMENT IDENTIFIER',
    elementVersion: 'ELEMENT VERSION',
    elementType: 'ELEMENT TYPE',
    property: 'Property',
    properties: 'Properties',
    of: 'of',
    cancel: 'Cancel',
    definition: 'Definition',
    definitions: 'Definitions',
    designation: 'Designation',
    designations: 'Designations',
    slot: 'Slot',
    slots: 'Slots',
    valueDomain: 'Value Domain',
    permittedValue: 'Permitted Value',
    valueDomains: 'Value Domains',
    valueDomainNotEditable: 'Value Domains can not be edited right now.',
    language: 'Language',
    languages: 'Languages',
    name: 'Name',
    value: 'Value',
    prefix: 'Prefix',
    baseUrl: 'Base URL',
    relation: 'Relation',
    relations: 'Relations',
    yes: 'Yes',
    no: 'No',
    searchText: 'Search text',
    elementTypes: 'Element types',
    elementStatuses: 'Element statuses',
    filter: 'Filter results ...',
    notYetImplemented: 'Not yet implemented ...',
    system: 'System',
    text: 'Text',
    term: 'Term',
    linkType: 'Link Type',
    version: 'Version',
    conceptAssociation: 'Concept Association',
    conceptAssociations: 'Concept Associations',
    member: 'Member',
    members: 'Members',
    logout: 'Logout',
    regEx: 'RegEx',
    minimum: 'Minimum',
    maximum: 'Maximum',
    range: 'Range',
    maximumLength: 'Maximum length',
    date: 'Date',
    time: 'Time',
    hourFormat: 'Hour Format',
    frontend: 'Frontend',
    backend: 'Backend',
    address: {
      name1: 'Universitätsklinikum Frankfurt',
      name2: 'Medical Informatics Group (MIG)',
      additionToAddress: 'Haus 33C 2 OG R216-R220',
      street: 'Theodor-Stern-Kai 7',
      zip: '60590',
      city: 'Frankfurt',
      web: 'https://www.mig-frankfurt.de'
    },
    table: {
      header: {
        id: 'Identifier',
        actions: 'Actions'
      },
      loading: 'Loading data. Please wait ...'
    },
    unreleasedMembersDialog: {
      message1: 'Released Groups and Records can only contain released' +
        ' members!',
      message2: 'Please release these Members first:'
    },
    itemDialog: {
      deleteItemTitle: 'Are you sure you want to delete this item?',
      snackbar: {
        deleteFailure: 'Could not delete this item!',
        deleteSuccess: 'Item deleted!',
        saveFailure: 'Could not save this item!',
        saveSuccess: 'Item saved!'
      }
    },
    select: {
      namespace: 'Select a Namespace ...',
      valueDomain: 'Select a Value Domain ...'
    },
    form: {
      validation: {
        messages: {
          requiredField: 'This Field is required',
          definitionRequired: 'Definition is required',
          designationRequired: 'Designation is required',
          languageRequired: 'Language is required',
          regExRequired: 'RegEx is required',
          maximumLengthRequired: 'Maximum Length is required',
          minimumRequired: 'Minimum is required',
          maximumRequired: 'Maximum is required',
          unitOfMeasureRequired: 'Unit of Measure is required',
          valueIsRequired: 'Value is required',
          namespaceIsRequired: 'Namespace is required',
          nameIsRequired: 'Name is required',
          maxChars: 'Maximum Chars exceeded'
        }
      },
      placeholder: {
        date: 'Enter date',
        time: 'Enter time',
        hourFormat: 'Enter hour format',
        regEx: 'Enter RegEx',
        maximumLength: 'Enter Maximum Length',
        minimum: 'Enter Minimum',
        maximum: 'Enter Maximum',
        value: 'Enter value'
      },
      label: {
        useRegEx: 'Use RegEx',
        useMaximumLength: 'Use Maximum Length',
        useMinimum: 'Use Minimum',
        useMaximum: 'Use Maximum',
        unitOfMeasure: 'Unit of Measure'
      }
    }
  },
  pages: {
    home: {
      introduction: 'Introducing DataElementHub',
      dehub: 'The central entry point for human users as well as machines for storing, managing and retrieving data element specifications.',
      1: 'Syntactic and semantic interoperability between data sources of different structure and formalization.',
      2: 'Partial implementation of ISO 11179-3 and ISO 21526 focusing on use cases on healthcare and medical research.',
      3: 'The metadata stored in DEHub helps to ensure, that data element specifications and thereby the respective data collections are accessible in a long-term manner, even for third parties.',
      4: 'The DEHub is intended to be a central component that can be used flexibly for different application scenarios, but still fulfills the requirements for structured and quality-controlled collection of metadata.'
    },
    namespaces: {
      title: 'Namespaces',
      subtitle: '',
      itemDialog: {
        title: {
          create: 'Create Namespace',
          update: 'Update Namespace'
        },
        form: {
          publicNamespace: 'Public Namespace',
          hiddenNamespace: 'Hide Namespace'
        }
      },
      actions: {
        createNamespace: 'Create Namespace'
      },
      table: {
        header: {
          designation: 'Designation',
          revision: 'Revision',
          status: 'Status'
        }
      },
      grantedNamespacesReadSubtitle: 'Readable Namespaces',
      grantedNamespacesWriteSubtitle: 'Writeable Namespaces',
      grantedNamespacesAdminSubtitle: 'Admin Namespaces',
      messages: {
        namespaceCreated: 'Namespace was created'
      }
    },
    dataElements: {
      title: 'Data Elements',
      subtitle: '',
      itemDialog: {
        title: {
          create: 'Create Data Element',
          update: 'Update Data Element'
        }
      },
      actions: {
        createDataElement: 'Create Data Element'
      },
      grantedDataElements: 'Available Data Elements',
      messages: {
        dataElementSaved: 'Data Element was saved'
      }
    },
    groups: {
      title: 'Data Element Groups',
      subtitle: '',
      itemDialog: {
        title: {
          create: 'Create Data Element Group',
          update: 'Update Data Element Group'
        }
      },
      actions: {
        createDataElementGroup: 'Create Data Element Group'
      },
      grantedDataElementGroups: 'Available Data Element Groups',
      messages: {
        dataElementGroupSaved: 'Data Element Group was saved'
      }
    },
    records: {
      title: 'Records',
      subtitle: '',
      itemDialog: {
        title: {
          create: 'Create Record',
          update: 'Update Record'
        }
      },
      actions: {
        createRecord: 'Create Record'
      },
      grantedRecords: 'Available Records',
      messages: {
        recordSaved: 'Record was saved'
      }
    },
    valueSets: {
      title: 'Value Sets',
      subtitle: ''
    },
    workspace: {
      staging: {
        title: 'Staging Elements',
        subtitle: ''
      },
      drafts: {
        title: 'Drafts',
        subtitle: ''
      },
      validate: {
        title: 'Validate',
        subtitle: ''
      }
    },
    view: {
      myData: {
        title: 'My Data',
        subtitle: ''
      },
      public: {
        title: 'Public Data',
        subtitle: ''
      },
      valueSets: {
        title: 'Value Sets',
        subtitle: ''
      }
    },
    tools: {
      namespaceComparison: {
        title: 'Namespace Comparison',
        subtitle: ''
      },
      mapping: {
        title: 'Mapping',
        subtitle: ''
      },
      visualizer: {
        title: 'Visualizer',
        subtitle: ''
      },
      importExport: {
        title: 'Import & Export',
        subtitle: ''
      },
      search: {
        title: 'Search',
        subtitle: '',
        elementSections: 'Element sections',
        searchResult: 'Search result'
      }
    },
    settings: {
      title: 'Settings',
      subtitle: ''
    },
    about: {
      title: 'About the DataElementHub',
      subtitle: ''
    },
    help: {
      title: 'Help?',
      subtitle: ''
    },
    login: {
      title: 'Login',
      introduction: 'Introducing DataElementHub',
      dehub: 'The central entry point for human users as well as machines for storing, managing and retrieving data element specifications.',
      1: 'Syntactic and semantic interoperability between data sources of different structure and formalization.',
      2: 'Partial implementation of ISO 11179-3 and ISO 21526 focusing on use cases on healthcare and medical research.',
      3: 'The metadata stored in DEHub helps to ensure, that data element specifications and thereby the respective data collections are accessible in a long-term manner, even for third parties.',
      4: 'The DEHub is intended to be a central component that can be used flexibly for different application scenarios, but still fulfills the requirements for structured and quality-controlled collection of metadata.',
      infoAlert: {
        text: 'In order to use this DEHub you have to authenticate against a <abbr title="Single Sign On">SSO Server</abbr>. The current <abbr title="Single Sign On">SSO Server</abbr> is operated by Medical Informatics Group (MIG).'
      },
      loginButton: 'Click here to login with SSO'
    }
  }
}
