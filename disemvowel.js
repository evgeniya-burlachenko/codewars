Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
------------------------------------------------------------------
function disemvowel(str) {
  str = str.replace(/[aeiouAEIOU]/g, "");
  return str;
}
----------------------------------------------------------------
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

/*g tells to find all matches, not just the first.

i tells to be case insensitive.

What goes inside the // is the pattern.

[] tells to match any character in a set.

aeiou are the characters in the set.*/
