var bankAccount = {};
bankAccount["name"] = "Chak";
bankAccount["balance"] = 0.25;
function displayBalance()
{
window.alert(bankAccount.balance);
};
function withdraw()
{
var x = prompt("How much would you llike to withdraw?");
bankAccount.balance -= x;
};
function deposit()
{
var y = prompt("How much would you llike to deposit?");
bankAccount.balance += y;
};