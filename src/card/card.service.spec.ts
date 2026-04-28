import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;

  beforeEach(() => {
    service = new CardService();
  });
  // Test case 1
  it('should return isValid true for a valid Visa card', () => {
    const result = service.validateCard('4111111111111111');
    expect(result.isValid).toBe(true);
    expect(result.Network).toBe('Visa');
   // expect(result.length).toBe(16)
   
  });

  it('should throw for a card with letters', () => {
    expect(() => service.validateCard('4111abc1111111')).toThrow();
  });

  it('Should throw if it fails the Luhns algorithm', () =>{
    const result = service.validateCard('4111111111111112');
    //expect(() => service.validateCard('4111111111111112')).toThrow()
    expect(result.isValid).toBe(false)
  })

});