import type { TestModule } from "./TestModule";

/* eslint-disable @typescript-eslint/no-unused-vars */ // 宣言のみのため unused-vars を無効
// require 利用のエラー。disalbe コメントで抑止
import _requireTest = require("./TestModule"); // eslint-disable-line @typescript-eslint/no-require-imports

// naming-convention
// 変数のcamelCase UpperCase での宣言, 接頭 `_` の変数のエラー除外
const UPPER_CASE = "";
let camelCase: number = 0;
const isTest = true;
const _snake_case = ""; // 変数のスネークケースはエラーとなるが 接頭に `_` があるため除外される
const _module: TestModule = {
	type: "foo"
};

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
		this.foo = arg ?? "";
	}

	// no-unused-vars: 引数の接頭が `_` の場合、未使用でもエラーとしない
	hogeFunc(_unuseArg?: any): void {
		try {
			this.bar();
		} catch (_err) {
			// catch ブロックで何もしない場合、引数は先頭に `_` つければエラーとならない
		}
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

// @typescript-eslint/no-floating-promises: Promise 関数の await 呼び出しを必須とする
async function floatingPromiseTest(): Promise<void> {
	// do nothing
}

await floatingPromiseTest();

// Math 関数の使用で警告。下記制御コメントを外すと警告となる
/* eslint-disable akashic/warn-global-math */
Math.acos(1);
Math.acosh(2);
Math.asin(3);
Math.asinh(4);
Math.atan(5);
Math.atanh(6);
Math.atan2(7, 7);
Math.cbrt(8);
Math.cos(9);
Math.cosh(10);
Math.exp(11);
Math.expm1(12);
Math.hypot(13);
Math.log(14);
Math.log1p(15);
Math.log10(16);
Math.log2(17);
Math.pow(18, 2);
Math.sin(19);
Math.sinh(20);
Math.sqrt(21);
Math.tan(22);
Math.tanh(23);
/* eslint-enable akashic/warn-global-math */
Math.round(24);
