import { isString, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({
  name: 'CpfValidator',
  async: false
})
export class CPFValidator implements ValidatorConstraintInterface {
  private cpfReg = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

  validate(value: string): boolean {
    if(!value||!isString(value)){ return false; }
    const cpf = value.trim();
    if(cpf.match(this.cpfReg) === null) {
      return false;
    }
    if(!this.isCpf(value)) {
      return false;
    }
    return true;
  }

  isCpf(value: string) {
    const cpf = value.replace(/\-|\./gi, '');
    if(cpf.length!==11){return false;}
    let total = 0, mod;
    for (let i=1; i<=9; i++) {
      total = total + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    mod = (total * 10) % 11;
    if(mod===10||mod===11) {
      mod = 0;
    }
    if (mod != parseInt(cpf.substring(9, 10)) ) return false;
    total = 0;
    for (let i = 1; i <= 10; i++) {
      total = total + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
    mod = (total * 10) % 11;
    if ((mod == 10) || (mod == 11)) mod = 0;
    if (mod != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
  }

  defaultMessage?(): string {
    return 'O valor informado não é um CPF válido!';
  }
}
