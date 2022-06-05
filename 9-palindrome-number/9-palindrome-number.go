
func isPalindrome(x int) bool {
    reversed := ""
    
     var str = strconv.Itoa(x)
    
    for _, char := range str {
       reversed = string(char) + reversed
    }
    
	y, _ := strconv.Atoi(reversed)
    
    return  y == x
}