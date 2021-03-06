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
 * Base definition of WebLinkedServiceTypeProperties, this typeProperties is
 * polymorphic based on authenticationType, so not flattened in SDK models.
 *
 */
class WebLinkedServiceTypeProperties {
  /**
   * Create a WebLinkedServiceTypeProperties.
   * @member {object} url The URL of the web service endpoint, e.g.
   * http://www.microsoft.com . Type: string (or Expression with resultType
   * string).
   * @member {string} authenticationType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of WebLinkedServiceTypeProperties
   *
   * @returns {object} metadata of WebLinkedServiceTypeProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WebLinkedServiceTypeProperties',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'authenticationType',
          clientName: 'authenticationType'
        },
        uberParent: 'WebLinkedServiceTypeProperties',
        className: 'WebLinkedServiceTypeProperties',
        modelProperties: {
          url: {
            required: true,
            serializedName: 'url',
            type: {
              name: 'Object'
            }
          },
          authenticationType: {
            required: true,
            serializedName: 'authenticationType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WebLinkedServiceTypeProperties;
