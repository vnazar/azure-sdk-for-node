/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the CertificateBundle class.
 * @constructor
 * A certificate bundle consists of a certificate (X509) plus its attributes.
 *
 * @member {string} [id] The certificate id
 * 
 * @member {string} [kid] The key id
 * 
 * @member {string} [sid] The secret id
 * 
 * @member {buffer} [x509Thumbprint] Thumbprint of the certificate.
 * 
 * @member {object} [policy] The management policy.
 * 
 * @member {string} [policy.id] The certificate id
 * 
 * @member {object} [policy.keyProperties] Properties of the key backing a
 * certificate.
 * 
 * @member {boolean} [policy.keyProperties.exportable] Indicates if the
 * private key can be exported.
 * 
 * @member {string} [policy.keyProperties.keyType] The key type.
 * 
 * @member {number} [policy.keyProperties.keySize] The key size in bytes. e.g.
 * 2048.
 * 
 * @member {boolean} [policy.keyProperties.reuseKey] Indicates if the same key
 * pair will be used on certificate renewal.
 * 
 * @member {object} [policy.secretProperties] Properties of the secret backing
 * a certificate.
 * 
 * @member {string} [policy.secretProperties.contentType] The media type (MIME
 * type).
 * 
 * @member {object} [policy.x509CertificateProperties] Properties of the X509
 * component of a certificate.
 * 
 * @member {string} [policy.x509CertificateProperties.subject] The subject
 * name. Should be a valid X509 Distinguished Name.
 * 
 * @member {array} [policy.x509CertificateProperties.ekus] The enhanced key
 * usage.
 * 
 * @member {object} [policy.x509CertificateProperties.subjectAlternativeNames]
 * The subject alternative names.
 * 
 * @member {array}
 * [policy.x509CertificateProperties.subjectAlternativeNames.emails] Email
 * addresses.
 * 
 * @member {array}
 * [policy.x509CertificateProperties.subjectAlternativeNames.dnsNames] Domain
 * names.
 * 
 * @member {array}
 * [policy.x509CertificateProperties.subjectAlternativeNames.upns] User
 * principal names.
 * 
 * @member {array} [policy.x509CertificateProperties.keyUsage] List of key
 * usages.
 * 
 * @member {number} [policy.x509CertificateProperties.validityInMonths] The
 * duration that the ceritifcate is valid in months.
 * 
 * @member {array} [policy.lifetimeActions] Actions that will be performed by
 * Key Vault over the lifetime of a certificate.
 * 
 * @member {object} [policy.issuerParameters] Parameters for the issuer of the
 * X509 component of a certificate.
 * 
 * @member {string} [policy.issuerParameters.name] Name of the referenced
 * issuer object or reserved names e.g. 'Self', 'Unknown'.
 * 
 * @member {string} [policy.issuerParameters.certificateType] Type of
 * certificate to be requested from the issuer provider.
 * 
 * @member {object} [policy.attributes] The certificate attributes.
 * 
 * @member {buffer} [cer] CER contents of x509 certificate.
 * 
 * @member {string} [contentType] The content type of the secret
 * 
 * @member {object} [attributes] The certificate attributes.
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
function CertificateBundle() {
}

/**
 * Defines the metadata of CertificateBundle
 *
 * @returns {object} metadata of CertificateBundle
 *
 */
CertificateBundle.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CertificateBundle',
    type: {
      name: 'Composite',
      className: 'CertificateBundle',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        kid: {
          required: false,
          readOnly: true,
          serializedName: 'kid',
          type: {
            name: 'String'
          }
        },
        sid: {
          required: false,
          readOnly: true,
          serializedName: 'sid',
          type: {
            name: 'String'
          }
        },
        x509Thumbprint: {
          required: false,
          readOnly: true,
          serializedName: 'x5t',
          type: {
            name: 'Base64Url'
          }
        },
        policy: {
          required: false,
          readOnly: true,
          serializedName: 'policy',
          type: {
            name: 'Composite',
            className: 'CertificatePolicy'
          }
        },
        cer: {
          required: false,
          serializedName: 'cer',
          type: {
            name: 'ByteArray'
          }
        },
        contentType: {
          required: false,
          serializedName: 'contentType',
          type: {
            name: 'String'
          }
        },
        attributes: {
          required: false,
          serializedName: 'attributes',
          type: {
            name: 'Composite',
            className: 'CertificateAttributes'
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
        }
      }
    }
  };
};

module.exports = CertificateBundle;