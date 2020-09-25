import { NgModule } from '@angular/core'
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { environment } from '../environments/environment'

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  // This should come from AuthService
  const token = localStorage.getItem('WEB_AUTH_TOKEN')
  const headers: any = {
    Authorization: token ? `Bearer ${token}` : null,
  }
  return {
    link: httpLink.create({
      uri: environment.graphqlUri,
      headers,
    }),
    cache: new InMemoryCache(),
  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
