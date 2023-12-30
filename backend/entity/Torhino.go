package entity

import (
	"gorm.io/gorm"
)

type Order struct {
	gorm.Model

	Timeoforder 	time.Time
	Shippingservice string
	Shippingfee 	int
	Quantity		int
	Price			float32
	Totalprice		float32
	Status			int

	EmployeeID 		*uint
    Employee   		Employee 	`gorm:"references:id"`
	AddressID 		*uint
    Address   		Address 	`gorm:"references:id"`
	CartID 			*uint
    Cart   			Cart 		`gorm:"references:id"`
}

type Cart struct {
	gorm.Model

	TotalPrice		float32
	Quantity		int

	CustomerID 		*uint
    Customer   		Customer 	`gorm:"references:id"`	

	Products   		[]Product 	`gorm:"many2many:cart_products;"`

}

type Wishlist struct {
	gorm.Model

	Added_at		time.Time

	CustomerID 		*uint
	Customer   		Customer 	`gorm:"references:id"`

	Products   		[]Product 	`gorm:"many2many:wishlist_products;"`
}

type Customer struct {
	gorm.Model

	Email			string
	Firstname		string
	Lastname		string
	Dateofbirth		time.Time
	Username		string

	Addresses 		[]Address 	`gorm:"foreignKey:CustomerID"`
	Wishlists		[]Wishlist 	`gorm:"foreignKey:CustomerID"`
	Carts			[]Cart 		`gorm:"foreignKey:CustomerID"`
}

type Payment struct {
	gorm.Model

	Shippingfee		int
	Paymentmethod	string
	Billphoto		string
	Totalprice      float32
	Paiddate		time.Time

	CustomerID 		*uint
    Customer   		Customer 	`gorm:"references:id"`
	OrderID 		*uint
    Order   		Order 		`gorm:"references:id"`
	StatusID 		*uint
    Status   		Status 		`gorm:"references:id"`
}

type Status struct {
	gorm.Model

	Status			string
	Describe		string

	Payments 		[]Payment 	`gorm:"foreignKey:StatusID"`
}

type Address struct {
	gorm.Model

	Fullname		string
	Phonenumber		string
	Address			string
	Province		string
	District		string
	Postcode		string
	Default			int

	CustomerID 		*uint
    Customer   		Customer 	`gorm:"references:id"`

	Orders 			[]Order 	`gorm:"foreignKey:AddressID"`
}

type Employee struct {
	gorm.Model

	Name			string
	Username		string
	Email			string
	Password		string
	Phone           string
	Department		string

	Orders  		[]Order   	`gorm:"foreignKey:EmployeeID"`
    Products 		[]Product 	`gorm:"foreignKey:EmployeeID"`
}

type Product struct {
	gorm.Model

	Name			string
	Photo			string
	Cost			int
	Color    		string
	Brand			string
	Quantity		int
	Sentfrom		string
	Details			string

	ProductTypeID   *uint
	ProductType     ProductType `gorm:"references:id"`
	EmployeeID 		*uint
    Employee   		Employee 	`gorm:"references:id"`

	Ratings 		[]Rating	`gorm:"foreignKey:ProductID"`
	Carts 			[]Cart   	`gorm:"many2many:cart_products;"`
	Wishlists 		[]Wishlist  `gorm:"many2many:wishlist_products;"`
}

type ProductType struct {
	gorm.Model

	Name			string

    Products      	[]Product 	`gorm:"foreignKey:ProductTypeID"`
}

type Rating struct {
	gorm.Model

	Dateandtime		time.Time
	Rate			int
	Description		string
	
	ProductID 		*uint
    Product   		Product 	`gorm:"references:id"`
}
