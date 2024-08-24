export const GetBGColorOfTable = (num:string | number) => {
    const gradient = "bg-gradient-to-r"
    return gradient + (parseInt(num as string) % 2 === 0 ?
     ' from-sky-100 to-stone-100 ' : 
     ' from-red-100 to-amber-100 ')
}