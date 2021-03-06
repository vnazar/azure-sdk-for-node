/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The properties used to create a new server by restoring to a different
 * region from a geo replicated backup.
 *
 * @extends models['ServerPropertiesForCreate']
 */
class ServerPropertiesForGeoRestore extends models['ServerPropertiesForCreate'] {
  /**
   * Create a ServerPropertiesForGeoRestore.
   * @property {string} sourceServerId The source server id to restore from.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServerPropertiesForGeoRestore
   *
   * @returns {object} metadata of ServerPropertiesForGeoRestore
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GeoRestore',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'createMode',
          clientName: 'createMode'
        },
        uberParent: 'ServerPropertiesForCreate',
        className: 'ServerPropertiesForGeoRestore',
        modelProperties: {
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          sslEnforcement: {
            required: false,
            serializedName: 'sslEnforcement',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          },
          storageProfile: {
            required: false,
            serializedName: 'storageProfile',
            type: {
              name: 'Composite',
              className: 'StorageProfile'
            }
          },
          createMode: {
            required: true,
            serializedName: 'createMode',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          sourceServerId: {
            required: true,
            serializedName: 'sourceServerId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServerPropertiesForGeoRestore;
