import * as _ from 'lodash';
import { ObjectId } from 'bson';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const RefSchema: mongoose<Schema> = new Schema(
  _.extend({
      fullname : String
    , contact : Number
    , relation : String
    , fullname1 : String
    , contact1 : Number
    , relation1 : String
    , active  : Boolean
  }, {
    userId: {
      type : String
      , 'default': new ObjectId()
  }
}));

export default mongoose.model('RefUser', RefSchema);
