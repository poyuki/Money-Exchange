// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let res={},H,Q,D,N,P,temp50,temp25,temp10,temp5,temp1;
    if(currency>10000){
        res.error='You are rich, my friend! We don\'t have so much coins for exchange'
    }else if(currency!==0&&currency>0){
        temp50=currency%50;
        H=temp50===0?currency/50:(currency-temp50)/50;
        temp25=temp50%25;
        Q=temp25===0?temp50/25:(temp50-temp25)/25;
        temp10=temp25%10;
        D=temp10===0?temp25/10:(temp25-temp10)/10;
        temp5=temp10%5;
        N=temp5===0?temp10/5:(temp10-temp5)/5;
        P=temp5/1;
        if(H!==0) res['H']=H;
        if(Q!==0) res['Q']=Q;
        if(D!==0) res['D']=D;
        if(N!==0) res['N']=N;
        if(P!==0) res['P']=P;
    }
    return res;
}
