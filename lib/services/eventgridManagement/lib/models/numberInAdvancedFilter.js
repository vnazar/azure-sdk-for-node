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
 * NumberIn filter
 *
 * @extends models['AdvancedFilter']
 */
class NumberInAdvancedFilter extends models['AdvancedFilter'] {
  /**
   * Create a NumberInAdvancedFilter.
   * @member {array} [values] The set of filter values
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NumberInAdvancedFilter
   *
   * @returns {object} metadata of NumberInAdvancedFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NumberIn',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'operatorType',
          clientName: 'operatorType'
        },
        uberParent: 'AdvancedFilter',
        className: 'NumberInAdvancedFilter',
        modelProperties: {
          key: {
            required: false,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          },
          operatorType: {
            required: true,
            serializedName: 'operatorType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NumberInAdvancedFilter;