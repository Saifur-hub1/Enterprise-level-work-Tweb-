/**
 * Date: 15/07/2024
 * Time: 4:35:00
 * Author: Saifur Rahman
 */

class LocalStorage<Storage extends Record<string, any>>{
  private prefix = '';
  private cache: Partial<Storage> = {};
  private useStorage = true;

  constructor(/* Private preserveKeys: (keyof Storage)[] */) {
    
  }
}