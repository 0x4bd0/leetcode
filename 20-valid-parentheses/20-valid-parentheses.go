func isValid(s string) (res bool) {
    
    Q := make([]string, 0)
    
    check := map[string]string{
        "(" : ")",
        "{" : "}",
        "[" : "]",
    }
    
    for i:=0; len(s) > i; i++ {
    
        if len(Q) > 0 && string(s[i]) == check[Q[len(Q)-1]] {
            Q = Q[:len(Q)-1]
        } else {  Q = append(Q, string(s[i]) )  }
    }
        
    
    return len(Q) == 0
    
}