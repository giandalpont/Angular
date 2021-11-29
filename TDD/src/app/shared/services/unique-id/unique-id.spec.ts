import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let serviceUuid: UniqueIdService = null;

  beforeEach(() => {
    serviceUuid = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    deve retornar um id único com o prefixo informado`, () => {
    const id = serviceUuid.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    deve não gerar ids repetidos quando for chamado multiplas vezes`, () => {
    /*
    const id = serviceUuid.generateUniqueIdWithPrefix('app');
    const id2 = serviceUuid.generateUniqueIdWithPrefix('app');
    expect(id).not.toEqual(id2);
    */
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(serviceUuid.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toEqual(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name}
    deve retornar o número de id quando for chamado`, () => {
    for (let i = 0; i < 15; i++) {
      serviceUuid.generateUniqueIdWithPrefix('app');
    }
    const id = serviceUuid.getNumberOfGeneratedIds();
    expect(id).toEqual(15);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    deve não regar id quando for chamado sem prefix`, () => {
    const emptyValues = [null, undefined, '', '1', '0', ' '];

    emptyValues.forEach((value) => {
      expect(() => {
        serviceUuid.generateUniqueIdWithPrefix(value);
      })
        .withContext(`valor: ${value}`)
        .toThrowError();
    });
  });
});
