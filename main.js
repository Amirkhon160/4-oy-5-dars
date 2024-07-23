let firstname = prompt(`Ismingizni kiriting`)
let harf = prompt(`Bironta harf kirgizing`)

firstname =  firstname.toLowerCase()
harf = harf.toLowerCase()

if (firstname.includes(harf)) {
    alert(`${firstname} ismida ${harf} harfi mavjud`)
} else {
    alert(`${firstname} ismida ${harf} harfi mavjud emas`)
}

