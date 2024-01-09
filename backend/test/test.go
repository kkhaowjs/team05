package test

import (
	// "fmt"
	"testing"

	"github.com/asaskevich/govalidator"
	. "github.com/onsi/gomega"
	"github.com/PyeThun/team05/entity"
)

func TestEmail(t *testing.T) {

	g := NewGomegaWithT(t)

	t.Run(`Email is invalid`, func(t *testing.T) {
		customer := entity.Customer{
			Email: "pak@hotmail.com",
			FirstName: "p",
			LastName: "p",
			Dateofbirth: "",
			Username: "p",
		}

		ok, err := govalidator.ValidateStruct(member)

		g.Expect(ok).NotTo(BeNil())
		g.Expect(err).NotTo(BeNil())

		g.Expect(err.Error()).To(Equal("Email is invalid"))
	})
}
