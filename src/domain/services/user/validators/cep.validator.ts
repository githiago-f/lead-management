import { isString, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import fetch from 'node-fetch';

@ValidatorConstraint({
  name: 'CepValidator',
  async: true
})
export class CEPValidator implements ValidatorConstraintInterface {
  async validate(value: string): Promise<boolean> {
    if(!value||!isString(value)){ return false; }
    const req = await fetch('https://viacep.com.br/ws/01001000/json');
    const json = await req.json();
    if(!json||json.erro===true){
      return false;
    }
    return true;
  }

  defaultMessage?(): string {
    return 'CEP não encontrado!';
  }
}
