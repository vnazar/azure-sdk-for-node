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
 * Information about a generated ARM template.
 *
 */
class ArmTemplateInfo {
  /**
   * Create a ArmTemplateInfo.
   * @member {object} [template] The template's contents.
   * @member {object} [parameters] The parameters of the ARM template.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ArmTemplateInfo
   *
   * @returns {object} metadata of ArmTemplateInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ArmTemplateInfo',
      type: {
        name: 'Composite',
        className: 'ArmTemplateInfo',
        modelProperties: {
          template: {
            required: false,
            serializedName: 'template',
            type: {
              name: 'Object'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = ArmTemplateInfo;