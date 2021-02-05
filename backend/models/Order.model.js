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
        enum: [
          0.2,
          0.4,
          0.6,
          0.8,
          1.0,
          1.2,
          1.4,
          1.6,
          1.8,
          2.0,
          2.2,
          2.4,
          2.6,
          2.8,
          3.0,
          3.2,
        ],
      },
      color: {
        type: String,
        required: [true, 'Please select the PCB color'],
        enum: [
          'Green',
          'Red',
          'Yellow',
          'Blue',
          'White',
          'Black',
          'No Solder Mask',
        ],
      },
      surfaceFinish: {
        type: String,
        required: [true, 'Please select the surface finish'],
        enum: ['HASL', 'No Surface Finish'],
      },
      copperWeight: {
        type: Number,
        required: [true, 'Please select the coppper weight'],
        enum: [35, 70],
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
    isDispatched: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    dispatchedAt: {
      type: Date,
    },
    underReview: {
      type: Boolean,
      default: true,
    },
    reviewPassed: {
      type: Boolean,
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    isAdjusted: {
      type: Boolean,
    },
    adjustedPrice: {
      type: Number,
    },
    adjustedTax: {
      type: Number,
    },
    adjustedTotal: {
      type: Number,
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
    logisticsPartner: {
      type: String,
    },
    trackingId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Order = mongoose.model('Order', orderSchema);
