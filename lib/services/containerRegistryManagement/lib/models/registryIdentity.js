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

/**
 * The identity of the container registry.
 *
 */
class RegistryIdentity {
  /**
   * Create a RegistryIdentity.
   * @member {string} [type] The type of identity used for the registry.
   * @member {string} [principalId] The principal ID of registry identity.
   * @member {string} [tenantId] The tenant ID associated with the registry.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RegistryIdentity
   *
   * @returns {object} metadata of RegistryIdentity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RegistryIdentity',
      type: {
        name: 'Composite',
        className: 'RegistryIdentity',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          principalId: {
            required: false,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RegistryIdentity;
