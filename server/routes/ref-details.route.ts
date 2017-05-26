
import * as _ from 'lodash';
import * as express from 'express';
import * as mongoose from 'mongoose';
import RefUser from '../models/ref-details.model';
import {RouteHelper} from '../utils/route.helper';
import {Server, Path, POST, GET, PUT, DELETE, PathParam, ContextRequest, ContextResponse, Return} from 'typescript-rest';


@Path('/referenceslist')
export class ReferenceService {
  public helper: RouteHelper = new RouteHelper();

  @POST
  saveRefUser(
      @ContextRequest req: express.Request,
      @ContextResponse res: express.Response): Return.NewResource<any> {

    const body: any = req.body.data;
    const refuser = new RefUser({


        
          fullname: body.fullname
        , contact: body.contact
        , relation: body.relation
        , fullname1: body.fullname1
        , contact1: body.contact1
        , relation1: body.relation1
        , active: body.active || true
        , date: new Date()
    });
    return this.helper.add(refuser);
  }

  @GET
  @Path(':id')
  getRefUserById(@PathParam('id') id: any): Promise<any> {
    const query = {_id: id};
    return this.helper.getOne(RefUser, query);
  }

  @GET
  @Path(':name/byName')
  getRefUserByName(@PathParam('name') name: any): Promise<any> {
    const query = {fname: name};
    return this.helper.getOne(RefUser, query);
  }

  @GET
  getRefUsers(): Promise<any> {
    return this.helper.getAll(RefUser);
  }

  @PUT
  @Path(':id')
  updateRefUser(
      @PathParam('id') id: string,
      @ContextRequest req: express.Request) {
    return this.helper.update(RefUser, {_id: id}, req.body.data);
  }

  @DELETE
  @Path(':id')
  removeRefUser(@PathParam('id') id: string) {
    return this.helper.remove(RefUser, {_id: id});
  }
}
