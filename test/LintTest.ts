
// naming-convention
// 変数のcamelCase UpperCase での宣言, 接頭 `_` の変数のエラー除外
/* eslint-disable @typescript-eslint/no-unused-vars */ // 宣言のみのため unused-vars を無効
const UPPER_CASE = "";
let camelCase: number;
const isTest = true;
const _snake_case = ""; // 変数のスネークケースはエラーとなるが 接頭に `_` があるため除外される

// type, Enum, interface class の PascalCase での宣言
type TypeTest = "";
enum EnumTest {}
interface InterfaceTest {};
abstract class AbstractTest {};
class TestClass {};

// indent: 関数、switch 文はタブのインデント
function fooFunc(): number {
	if (isTest) {
		camelCase = 1;
	}
	return camelCase;
};
switch (camelCase) {
	case 0: break;
	case 1: break;
	default: break;
}

// 三項演算子 のインデントは無視される
const ret = camelCase > 0
	? UPPER_CASE :
		isTest ? fooFunc() :
			false;

// member-delimiter-style
// interface や type の区切り文字はセミコロン(;)とする
interface IfBar { name: string; }
interface IfBaz {
	name: string;
	test(): string;
}
type Bar = {
	name: string;
	greet(): string;
};
type FooBar = { name: string }; // 1つの場合はセミコロン不要
/* eslint-enable @typescript-eslint/no-unused-vars */

// member-ordering
// fielsd の宣言順序: 変数(static, public, private), static 関数, constructor, 関数 (public, private) の順序となる
class OrderTest {
	static BAZ: number = 0;
	public hoge: string;
	private foo: string;

	// explicit-function-return-type
	static HOGE(): void {
		OrderTest.BAZ++;
	}
	constructor(arg?: string) {
		this.foo = arg;
	}

	// no-unused-vars: 引数の接頭が `_` の場合、未使用でもエラーとしない
	hogeFunc(_unuseArg?: any): void {
		this.bar();
	}
	private bar(): void {
		// typedef:  interface, type のプロパティ メンバ変数、関数の引数に型は必要だが、
		// アロー関数 の引数では型がなくともエラーとしない
		// explicit-function-return-type: 関数の戻り型の宣言は必要だがアロー関数の戻り型はなくてもエラーとしない
		const count = (nums): number => nums.map(i => i * i);
		this.foo = this.hoge + count;
	}
};
const test = new OrderTest();
// dot-notation: ブラケット記法(obj["prop1"]) はエラーとしドット記法とする
const obj = { "prop1": "value1" };
test.hogeFunc(obj.prop1);
