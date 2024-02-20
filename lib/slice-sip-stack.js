const cdk = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');

class SliceSipStack extends cdk.Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new s3.Bucket(this, 'SliceSipBucket', {
      versioned: true
    });
  }
}

module.exports = { SliceSipStack }