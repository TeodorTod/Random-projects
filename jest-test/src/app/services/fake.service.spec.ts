import { of } from 'rxjs';
import { FakeService } from './fake.service';

describe('FakeService', () => {
  let service: FakeService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn()
    }
    service = new FakeService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getDataV1', () => {
    const res = 'testRes';
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDataV1();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should test getDataV2', () => {
    const res = 'testRes';
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDataV2();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

});

