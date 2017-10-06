import { TestBed, inject } from '@angular/core/testing';

import { GithubApiService } from './github.api.service';

describe('Github.ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubApiService]
    });
  });

  it('should be created', inject([GithubApiService], (service: GithubApiService) => {
    expect(service).toBeTruthy();

    service.getUser('georgesdaniel')
      .subscribe((result:any) => {
        console.log('next');
        expect(result.login).toBe('georgesdaniel')
      }, () => {
        console.log('error');
        fail("Do not fail")
      }, () => {
        console.log('complete');
      });

  }));
});



