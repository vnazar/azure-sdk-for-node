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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineExtension class.
 * @constructor
 * Describes a Virtual Machine Extension.
 * @member {string} [forceUpdateTag] how the extension handler should be
 * forced to update even if the extension configuration has not changed.
 * 
 * @member {string} [publisher] the name of the extension handler publisher.
 * 
 * @member {string} [virtualMachineExtensionType] the type of the extension
 * handler.
 * 
 * @member {string} [typeHandlerVersion] the type version of the extension
 * handler.
 * 
 * @member {boolean} [autoUpgradeMinorVersion] whether the extension handler
 * should be automatically upgraded across minor versions.
 * 
 * @member {object} [settings] Json formatted public settings for the
 * extension.
 * 
 * @member {object} [protectedSettings] Json formatted protected settings for
 * the extension.
 * 
 * @member {string} [provisioningState] the provisioning state, which only
 * appears in the response.
 * 
 * @member {object} [instanceView] the virtual machine extension instance view.
 * 
 * @member {string} [instanceView.name] the virtual machine extension name.
 * 
 * @member {string} [instanceView.type] the full type of the extension handler
 * which includes both publisher and type.
 * 
 * @member {string} [instanceView.typeHandlerVersion] the type version of the
 * extension handler.
 * 
 * @member {array} [instanceView.substatuses] the resource status information.
 * 
 * @member {array} [instanceView.statuses] the resource status information.
 * 
 */
function VirtualMachineExtension() {
  VirtualMachineExtension['super_'].call(this);
}

util.inherits(VirtualMachineExtension, models['Resource']);

/**
 * Defines the metadata of VirtualMachineExtension
 *
 * @returns {object} metadata of VirtualMachineExtension
 *
 */
VirtualMachineExtension.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineExtension',
    type: {
      name: 'Composite',
      className: 'VirtualMachineExtension',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        forceUpdateTag: {
          required: false,
          serializedName: 'properties.forceUpdateTag',
          type: {
            name: 'String'
          }
        },
        publisher: {
          required: false,
          serializedName: 'properties.publisher',
          type: {
            name: 'String'
          }
        },
        virtualMachineExtensionType: {
          required: false,
          serializedName: 'properties.type',
          type: {
            name: 'String'
          }
        },
        typeHandlerVersion: {
          required: false,
          serializedName: 'properties.typeHandlerVersion',
          type: {
            name: 'String'
          }
        },
        autoUpgradeMinorVersion: {
          required: false,
          serializedName: 'properties.autoUpgradeMinorVersion',
          type: {
            name: 'Boolean'
          }
        },
        settings: {
          required: false,
          serializedName: 'properties.settings',
          type: {
            name: 'Object'
          }
        },
        protectedSettings: {
          required: false,
          serializedName: 'properties.protectedSettings',
          type: {
            name: 'Object'
          }
        },
        provisioningState: {
          required: false,
          readOnly: true,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        },
        instanceView: {
          required: false,
          serializedName: 'properties.instanceView',
          type: {
            name: 'Composite',
            className: 'VirtualMachineExtensionInstanceView'
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineExtension;