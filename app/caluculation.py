import ./so
def prime_factorization(target_num):
    respons_json = {}
    for prime in so.prime_list:
        if target_num < prime:
            break
        while True:
            quotient, remainder = divmod(target_num, prime)
            if remainder > 0:
                break
            else:
                target_num = quotient
                if prime not in respons_json:
                    respons_json[prime] = 1 
                else:
                    respons_json[prime] += 1

    return respons_json