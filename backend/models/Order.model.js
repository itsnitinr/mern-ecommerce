const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    gerberFileUrl: {
      type: String,
      required: true,
    },
    pcbDetails: {
      layers: {
        type: Number,
        required: [true, 'Please enter the number of PCB layers'],
        enum: [1, 2],
      },
      dimensions: {
        x: {
          type: Number,
          required: [true, 'Please enter horizontal length'],
        },
        y: {
          type: Number,
          required: [true, 'Please enter vertical length'],
        },
      },
      quantity: {
        type: Number,
        required: [true, 'Please enter the quantity'],
      },
      thickness: {
        type: Number,
        required: [true, 'Please enter the thickness'],
        enum: [0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0],
      },
      color: {
        type: String,
        required: [true, 'Please select the PCB color'],
        enum: ['green', 'red', 'yellow', 'blue', 'white', 'black'],
      },
      surfaceFinish: {
        type: String,
        required: [true, 'Please select the surface finish'],
        enum: ['HASL', 'ENIG-RoHs'],
      },
      copperWeight: {
        type: Number,
        required: [true, 'Please select the coppper weight'],
        enum: [1, 2],
      },
      goldFingers: {
        type: Boolean,
        required: [true, 'Please select if you want gold fingers'],
      },
      flyingProbeTest: {
        type: Boolean,
        required: [true, 'Please select if you want flying probe test'],
      },
      castellatedHoles: {
        type: Boolean,
        required: [true, 'Please select if you want castellated holes'],
      },
      remarks: {
        type: String,
      },
    },
    orderPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingDetails: {
      addressLine1: {
        type: String,
        required: [true, 'Please provide address line 1'],
      },
      addressLine2: {
        type: String,
        required: [true, 'Please provide address line 2'],
      },
      city: {
        type: String,
        required: [true, 'Please provide the city'],
      },
      state: {
        type: String,
        required: [true, 'Please provide the state'],
      },
      pincode: {
        type: String,
        required: [true, 'Please provide the pincode'],
      },
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    deliveredAt: {
      type: Date,
    },
    underReview: {
      type: Boolean,
      default: true,
    },
    reviewPassed: {
      type: Boolean,
    },
    razorpayOrderId: {
      type: String,
    },
    razorpayPaymentId: {
      type: String,
    },
    razorpaySignature: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Order = mongoose.model('Order', orderSchema);
