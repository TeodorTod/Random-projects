import { TestBed } from "@angular/core/testing";
import { ApiService } from "./api.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TagInterface } from "../types/tag.interface";

describe('ApiService', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;

    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ApiService]
    });

    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);

    afterEach(() => {
        httpTestingController.verify()
    });

    it('creates service', () => {
        expect(apiService).toBeTruthy();
    })

    describe('getTags', () => {
        it('should return a list of tags', () => {
            let tags: TagInterface | undefined;
            apiService.getTags().subscribe(response => {
                tags = response;
            });
            const req = httpTestingController.expectOne('http://localhost:3004/tags');
            req.flush([{ id: '1', name: 'foo' }])
            expect(tags).toEqual([{ id: '1', name: 'foo' }]);
        });
    });
});