FROM golang:latest as builder

WORKDIR /usr/src/app

COPY . .

RUN go mod init app && \
    go build -o /usr/src/app/app

FROM scratch

COPY --from=builder /usr/src/app/app /usr/src/app/app

CMD ["/usr/src/app/app"]